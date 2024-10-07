import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import CollageEditor from '../components/CollageEditor';

const Home = () => {
  const [images, setImages] = useState([]);

  const handleDrop = (acceptedFiles) => {
    // Limit to a maximum of 12 images
    const newImages = acceptedFiles.map(file => URL.createObjectURL(file));
    setImages(prevImages => {
      const updatedImages = [...prevImages, ...newImages];
      return updatedImages.slice(0, 12); // Ensure we only keep the first 12 images
    });
  };

  return (
    <div>
      <h1>Digital Art Creator (Collage Maker)</h1>
      <ImageUploader onDrop={handleDrop} />
      <CollageEditor images={images} />
      {images.length >= 12 && <p>Maximum of 12 images reached.</p>}
    </div>
  );
};

export default Home;
