import './App.css';
import { Navigation } from './components';
import { Grid } from '@mui/material';
import { HomePage } from './pages';

function App() {

  return (
    <Grid container spacing={2} className='home' justifyContent="center" alignContent="center">
      <Navigation />
      <HomePage />
    </Grid>
  );
}

export default App;
