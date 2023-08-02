import './App.css';
import { Navigation, Footer } from './components/index';
import { Grid } from '@mui/material';
import { HomePage } from './pages';

function App() {

  return (
    <Grid container spacing={2} className='home' justifyContent="center" alignContent="center">
      <Navigation />
      <HomePage />
      <Footer />
    </Grid>
  );
}

export default App;
