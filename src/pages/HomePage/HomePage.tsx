import { Link, Typography, Grid } from '@mui/material';
import { SocialMedia } from '../../components';
import ImageBgSection from '../../components/Image Bg Section/ImageBgSection';

const ramblersLogo = process.env.REACT_APP_RAMBLERSTOWN_LOGO || ''
const CropLeo = process.env.REACT_APP_CROP_LEO || ''
const CropJoss = process.env.REACT_APP_CROP_JOSS || ''
const CropEddie = process.env.REACT_APP_CROP_EDDIE || ''
const CropAdrian = process.env.REACT_APP_CROP_ADRIAN || ''
const CropSergio = process.env.REACT_APP_CROP_SERGIO || ''
const CollageRamblers = process.env.REACT_APP_COLLAGE_RAMBLERS || ''

export default function HomePage() {
    const logoSrc = ramblersLogo;
    const bigScreenWidth = 700;
    const bigScreenHeight = 550;
    const tabletWidth = 500;
    const tabletHeight = 400;
    const mobileWidth = 250;
    const mobileHeight = 180;

    const cropImages = [CropJoss, CropAdrian, CropEddie, CropSergio, CropLeo]

    const imagesStyle = { marginBottom: '10px', boxShadow: '3px 3px 3px 3px #010101' }

    const logoImages = [
        { props: { width: bigScreenWidth, height: bigScreenHeight }, type: "web" as const },
        { props: { width: tabletWidth, height: tabletHeight }, type: "tablet" as const },
        { props: { width: mobileWidth, height: mobileHeight }, type: "mobile" as const },
    ];

    const collageImages = [
        { props: { width: 1200, style: imagesStyle }, type: "web" as const },
        { props: { width: 700, style: imagesStyle }, type: "tablet" as const },
    ];

    const cropImagesData = [
        { props: { width: '90%', style: imagesStyle }, type: "mobile" as const }
    ];

    return (
        <>
            <Grid item md={12}>
                <Link href="#" >
                    <ImageBgSection imageSrc={logoSrc} components={logoImages} />
                </Link>
            </Grid>
            <Grid item md={12} container justifyContent="center">
                <Typography variant="h6" sx={{ fontWeight: '700', marginRight: '10px', marginLeft: '10px' }}>
                    Una banda de rock clasico con un toque de jazz y blues.
                </Typography>
            </Grid>
            <SocialMedia />
            <Grid item md={12}>
                <ImageBgSection imageSrc={CollageRamblers} components={collageImages} />
                <Grid container justifyContent='center'>
                    {cropImages.map(item => {
                        return (<ImageBgSection imageSrc={item} components={cropImagesData} />)
                    })}
                </Grid>
            </Grid>
        </>
    )
}
