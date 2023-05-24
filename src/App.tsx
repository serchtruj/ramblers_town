import './App.css';
import { SocialMedia, Navigation } from './components';
import { useMediaQuery } from 'react-responsive'
import { Link, Typography, Grid } from '@mui/material';


const ramblersLogo = process.env.REACT_APP_RAMBLERSTOWN_LOGO || ''
const CropLeo = process.env.REACT_APP_CROP_LEO || ''
const CropJoss = process.env.REACT_APP_CROP_JOSS || ''
const CropEddie = process.env.REACT_APP_CROP_EDDIE || ''
const CropAdrian = process.env.REACT_APP_CROP_ADRIAN || ''
const CropSergio = process.env.REACT_APP_CROP_SERGIO || ''
const CollageRamblers = process.env.REACT_APP_COLLAGE_RAMBLERS || ''

function App() {
  const isBigScreen = useMediaQuery({ minWidth: 1224 })
  const isTablet = useMediaQuery({ maxWidth: 1224, minWidth: 600})
  const isMobile = useMediaQuery({ maxWidth: 600 })

  const logoSrc = ramblersLogo;
  const bigScreenWidth = 700;
  const bigScreenHeight = 550;
  const tabletWidth = 500;
  const tabletHeight = 400;
  const mobileWidth = 250;
  const mobileHeight = 180;

  const cropImages = [CropJoss, CropAdrian, CropEddie, CropSergio, CropLeo]

  const imagesStyle ={marginBottom: '10px',boxShadow: '3px 3px 3px 3px #010101'}

  const ImagesCropMobile = () => {
    return (
      <Grid container justifyContent='center'>
        {cropImages.map(item => {
          return (
          <img
            key={item} 
            src={item}
            alt={item}
            width='90%'
            style={imagesStyle}
          />)
        })}
      </Grid>
    )
  }

  return (
    <Grid container spacing={2} className='home' justifyContent="center" alignContent="center">
      <Navigation/>
      <Grid item md={12}>
        <Link href="#" >
          {isBigScreen && (
            <img 
              src={logoSrc} 
              width={bigScreenWidth} 
              height={bigScreenHeight} 
              alt={logoSrc}/>
            )}
          {isTablet && (
            <img 
              src={logoSrc} 
              width={tabletWidth} 
              height={tabletHeight} 
              alt={logoSrc}/>
            )}
          {isMobile && (
            <img 
              src={logoSrc} 
              width={mobileWidth} 
              height={mobileHeight}
              alt={logoSrc}/>
          )}
        </Link>
      </Grid>
      <Grid item md={12} container justifyContent="center">
          <Typography variant="h6" sx={{fontWeight: '700', marginRight: '10px', marginLeft: '10px'}}>
          Una banda de rock clasico con un toque de jazz y blues.
          </Typography>
      </Grid>
      <SocialMedia/>
      <Grid item md={12}>
        {isBigScreen && (
          <img 
            src={CollageRamblers} 
            alt={CollageRamblers}
            width={1200}
            
            style={imagesStyle} 
          />
        )}
        {isTablet && (
          <img 
            src={CollageRamblers} 
            alt={CollageRamblers}
            width={700}     
            style={imagesStyle} 
          />
        )}
        {isMobile && <ImagesCropMobile />}
      </Grid>
    </Grid>
  );
}

export default App;
