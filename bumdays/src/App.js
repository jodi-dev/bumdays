import './App.css';
import React, { useState } from 'react';
import MyChart from './MyChart';
import AppBar from './AppBar';
import { Box, Typography, Paper, Card, CardContent, Grid, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import Toggler from './Toggler';
import KPI_cards from './KPI_cards';
import Header from './Header';

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
      <Box sx={{
        backgroundColor: '#ffc0cb', // Replace with your desired background color
        minHeight: '100vh', // 100% of the viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}>
      <Container>
        <Grid container spacing={2}>
          <Header />
          <Grid item xs={4}>
            <KPI_cards />
          </Grid>
          <Grid item xs={8}>
              <Paper elevation={1} style={{ textAlign: 'right', padding: '1rem', marginTop: '0.5rem' }}>
                <Toggler/>
            </Paper>
            <Paper elevation={1} style={{ padding: '1rem', marginTop: '0.5rem' }}>
              <MyChart chartData={csvData}/>
            </Paper>
            <Paper elevation={1} style={{ textAlign: 'right', padding: '1rem', marginTop: '0.5rem' }}>
              <input type="file" onChange={handleFileChange} />
            </Paper>
        </Grid>
        </Grid>
      </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
