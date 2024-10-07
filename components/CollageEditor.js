import React, { useRef, useEffect } from 'react';

const CollageEditor = ({ images }) => {
  const canvasRef = useRef(null);

  const handleExport = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'collage.png';
    link.click();
  };

  const drawCollage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cols = 4; // Number of columns
    const rows = 3; // Number of rows
    const imgWidth = canvas.width / cols; // Image width based on canvas width
    const imgHeight = canvas.height / rows; // Image height based on canvas height

    // Keep track of how many images have loaded
    let imagesLoaded = 0;

    images.forEach((image, index) => {
      const img = new Image();
      img.src = image;
      
      img.onload = () => {
        const x = (index % cols) * imgWidth; // Calculate x position
        const y = Math.floor(index / cols) * imgHeight; // Calculate y position
        ctx.drawImage(img, x, y, imgWidth, imgHeight); // Draw image

        // Increment the count of loaded images
        imagesLoaded++;

        // Only redraw the collage when all images are loaded
        if (imagesLoaded === images.length) {
          ctx.drawImage(img, x, y, imgWidth, imgHeight);
        }
      };
    });
  };

  useEffect(() => {
    if (images.length > 0) {
      drawCollage();
    }
  }, [images]); // Drawing the collage when images change

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600} />
      <button onClick={handleExport}>Export Collage</button>
    </div>
  );
};

export default CollageEditor;
