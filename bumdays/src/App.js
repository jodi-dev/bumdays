import './App.css';
import React, { useState } from 'react';
import MyChart from './MyChart';
import AppBar from './AppBar';
import { Typography, Paper, Card, CardContent, Grid, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import Toggler from './Toggler';

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
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography style={{color: '#bdbdbd'}}gutterBottom variant="h9" component="div">
                Card 1
              </Typography>
              <Typography component="div">
                Lorem Ipsum
              </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography style={{color: '#bdbdbd'}}gutterBottom variant="h9" component="div">
                Card 2
              </Typography>
              <Typography component="div">
                Lorem Ipsum
              </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography style={{color: '#bdbdbd'}}gutterBottom variant="h9" component="div">
                Card 3
              </Typography>
              <Typography component="div">
                Lorem Ipsum
              </Typography>
              </CardContent>
            </Card>
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
    </ThemeProvider>
  );
}

export default App;
