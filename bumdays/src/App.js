import './App.css';
import React, { useState } from 'react';
import MyChart from './MyChart';
import theme from './Theme';
import AppBar from './AppBar';
import { Typography, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  const [csvData, setCsvData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const csvText = e.target.result;
        console.log('csvText:', csvText);
        parseCSV(csvText);
      };

      reader.readAsText(file);
    }
  };

  const parseCSV = (csvText) => {
    const lines = csvText.split("\n");
    // const headers = lines[0].split(",");
    const parsedData = [];

    for (let i = 0; i < lines.length; i++) {
      const currentLine = lines[i].split(",");
      const row = currentLine.map((value) => parseInt(value.trim()));
      parsedData.push(row);
    }

    setCsvData(parsedData);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <div>
        <Paper elevation={0} style={{ padding: '1rem', marginTop: '0.5rem' }}>
          <Typography>Testing Chartjs</Typography>
          <input type="file" onChange={handleFileChange} />
        </Paper>
      </div>
      <div>
        <Paper elevation={0} style={{ padding: '1rem', marginTop: '0.5rem' }}>
          <MyChart chartData={csvData}/>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
