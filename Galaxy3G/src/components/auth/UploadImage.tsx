import React, { useState, useEffect, ChangeEvent, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

interface Image {
  _id: string;
  imageUrl: string;
}

const UploadImage: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { auth } = authContext;

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get<Image[]>("http://localhost:4000/api/images");
      setImages(res.data.reverse()); // Ensure latest images are on top
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post<{ url: string }>(
        "http://localhost:4000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setImageUrl(res.data.url);
      alert("🎉 Image uploaded successfully!");
      setImages((prevImages) => [{ _id: Date.now().toString(), imageUrl: res.data.url }, ...prevImages]); // Add new image on top
    } catch (error) {
      console.error("Upload failed:", error);
      alert("🚨 Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen pt-16">
      {auth.isAdmin && (
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 border border-gray-300 md:w-3/4 lg:w-1/2">
          <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">📸 Upload Your Image</h2>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            className="mb-3 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
          />
          <button 
            onClick={handleUpload} 
            className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-200 font-semibold"
            disabled={uploading}
          >
            {uploading ? "⏳ Uploading..." : "🚀 Upload"}
          </button>

          {imageUrl && (
            <div className="mt-4 flex justify-center">
              <img src={imageUrl} alt="Uploaded" className="w-40 h-40 object-cover rounded-lg shadow-md border-2 border-purple-500" />
            </div>
          )}
        </div>
      )}

      <h2 className="text-2xl font-bold text-gray-800 mt-6">🌟 Uploaded Images</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <img 
            key={img._id} 
            src={img.imageUrl} 
            alt="Stored" 
            className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg shadow-md border-2 border-blue-500 hover:scale-105 transition-transform duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
