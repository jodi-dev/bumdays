import './App.css';
import MyChart from './MyChart';
import theme from './Theme';
import AppBar from './AppBar';
import Upload from './Upload';
import { Typography, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <div>
        <Paper elevation={0} style={{ padding: '1rem', marginTop: '0.5rem' }}>
          <Typography>Testing Chartjs</Typography>
          <Upload />
        </Paper>
      </div>
      <div>
        <Paper elevation={0} style={{ padding: '1rem', marginTop: '0.5rem' }}>
          <MyChart />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
