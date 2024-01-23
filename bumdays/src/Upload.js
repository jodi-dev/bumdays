import React, { useState } from 'react';
import { Switch, Typography, FormControlLabel, Container, Button, Input } from '@mui/material';

const Upload = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const [file, setFile] = useState(null);

  const handleToggleChange = () => {
    setToggleValue((prevValue) => !prevValue);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    // Add your upload logic here
    console.log('File uploaded:', file);
  };

  return (
    <Container>
      <Typography>Upload</Typography>
      <Input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
    </Container>
  );
};

export default Upload;
