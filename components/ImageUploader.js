import React from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
    </div>
  );
};

export default ImageUploader;
