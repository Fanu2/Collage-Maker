import React from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some images here, or click to select images</p>
    </div>
  );
};

export default ImageUploader;
