import React from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some images here, or click to select images</p>
    </div>
  );
};

export default ImageUploader;
