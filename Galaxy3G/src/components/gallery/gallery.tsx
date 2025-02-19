import { useEffect, useState } from 'react';

// Explicitly import images from the assets folder
import image1 from '../assets/2ae3f000-6ceb-4a81-9c66-16e003b20a39.jpeg';
import image2 from '../assets/348d2178-4829-4a2e-a852-57d653653642.jpeg';
import image3 from '../assets/34f6b33d-ef51-432f-8584-1b1cffcaa748.jpeg';
import image4 from '../assets/49687657-217e-4da0-ad02-a2595de5db08.jpeg';
import image5 from '../assets/5512e0c1-4983-4b1f-aca5-4753d918550f.jpeg';
import image6 from '../assets/695731f9-2ebf-4265-a772-08d828d633f1.jpeg';
import image7 from '../assets/6f23c96b-77c7-4e83-b428-c7f99dbd1844.jpeg';
import image16 from '../assets/WhatsApp Image 2024-12-31 at 1.41.17 PM (1).jpeg';
import image8 from '../assets/WhatsApp Image 2024-12-31 at 1.41.17 PM.jpeg';
import image9 from '../assets/WhatsApp Image 2024-12-31 at 1.41.18 PM.jpeg';
import image10 from '../assets/a37745c9-5b53-4bfd-a01c-7f3d60fbc114.jpeg';
import image11 from '../assets/a9b8a2e1-a08d-4bf8-ad88-123a36802e97.jpeg';
import image12 from '../assets/aa5818a7-ba62-45f0-b59c-07ad9ab3f483.jpeg';
import image13 from '../assets/ac91f5e1-3f0f-44bc-9b8d-22baa60be466.jpeg';
import image14 from '../assets/ad0a5199-54ae-4710-a167-9b448d06dcfd.jpeg';
import image15 from '../assets/ae34d088-d84b-439f-ac58-10c986cdd873.jpeg';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';
const imagess = [image1, image2, image3, image4 ,image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16];

const Gallery = () => {
  const authContext = useContext(AuthContext);

  // Ensure AuthContext is available
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { auth } = authContext;


  const [images, setImages] = useState<Image[]>([]);
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
  

  

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        {auth.isAdmin && (
        <div className="text-right mb-6">
          <Link to="/uploadimage">
            <button
              className="bg-[#470A68] text-white rounded-md w-full py-3 transition-colors duration-300"
            >
              Upload Image
            </button>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img._id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={img.imageUrl}
                alt='Stored'
                className="w-full  object-cover"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {imagess.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
export default Gallery;
