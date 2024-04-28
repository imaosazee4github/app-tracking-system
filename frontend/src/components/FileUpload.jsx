// Sample for file upload on client side,
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('', formData, {
        // make axios request to the backend
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });

      console.log(response);
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
  };

  return (
    <div className="App">
      <h1>File Upload Example</h1>
      <input type="file" onChange={handleFileChange} />
      <button className="bg-black text-white p-2 m-2" onClick={handleFileUpload}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
