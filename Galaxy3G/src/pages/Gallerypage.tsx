import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header'; // Assuming you have a Header component
import Footer from '../components/layout/Footer'; // Assuming you have a Footer component

// Import images from the assets folder
import image1 from '../components/assets/348d2178-4829-4a2e-a852-57d653653642.jpeg';
import image2 from '../components/assets/348d2178-4829-4a2e-a852-57d653653642.jpeg';
import image3 from '../components/assets/34f6b33d-ef51-432f-8584-1b1cffcaa748.jpeg';
import image4 from '../components/assets/49687657-217e-4da0-ad02-a2595de5db08.jpeg';
import image5 from '../components/assets/5512e0c1-4983-4b1f-aca5-4753d918550f.jpeg';
import image6 from '../components/assets/695731f9-2ebf-4265-a772-08d828d633f1.jpeg';
import image7 from '../components/assets/6f23c96b-77c7-4e83-b428-c7f99dbd1844.jpeg';
import image8 from '../components/assets/WhatsApp Image 2024-12-31 at 1.41.17 PM.jpeg';
import image9 from '../components/assets/WhatsApp Image 2024-12-31 at 1.41.18 PM.jpeg';
import image10 from '../components/assets/a37745c9-5b53-4bfd-a01c-7f3d60fbc114.jpeg';
import image11 from '../components/assets/a9b8a2e1-a08d-4bf8-ad88-123a36802e97.jpeg';
import image12 from '../components/assets/aa5818a7-ba62-45f0-b59c-07ad9ab3f483.jpeg';
import image13 from '../components/assets/ac91f5e1-3f0f-44bc-9b8d-22baa60be466.jpeg';
import image14 from '../components/assets/15.jpeg';
import image15 from '../components/assets/16.jpeg';
import image16 from '../components/assets/17.jpeg';
import image17 from '../components/assets/18.jpeg';
import image18 from '../components/assets/19.jpeg';
import image19 from '../components/assets/20.jpeg';
import image20 from '../components/assets/21.jpeg';
import image21 from '../components/assets/22.jpeg';
import image22 from '../components/assets/23.jpeg';
import image23 from '../components/assets/24.jpeg';
import image24 from '../components/assets/25.jpeg';
import image25 from '../components/assets/26.jpeg';
import image26 from '../components/assets/27.jpeg';
import image27 from '../components/assets/29.jpeg';
import image28 from '../components/assets/30.jpeg';
import image29 from '../components/assets/gallerybackground.png';



const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14,image15, image16, image17, image18, image19, 
  image20,image21,image22,image23,image24,image25,image26,image27,image28,
];

const GalleryPage = () => {
  return (
    <div>

      {/* Parallax Section */}
      <section className="relative h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image29})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Our Gallery</h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
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
    </div>
  );
};

export default GalleryPage;
