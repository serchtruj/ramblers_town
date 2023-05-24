import {Grid} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from './TikTokIcon';
import './SocialMedia.css'
import { useMediaQuery } from 'react-responsive'

interface IconProps {
  sx: any;
  onClick: any;
}

interface SocialIconProps {
  iconType: string;
  iconProps: IconProps;
}

function SocialIcon ({iconType, iconProps} : SocialIconProps) {
  if(iconType === 'facebook') return <FacebookIcon {...iconProps} className='social-media'/>
  if(iconType === 'instagram') return <InstagramIcon {...iconProps}className='social-media' />
  if(iconType === 'youtube') return <YouTubeIcon {...iconProps} className='social-media'/>
  if(iconType === 'tiktok') return <TikTokIcon {...iconProps} className='social-media' />
  return null
}

const INSTAGRAM_URL = process.env.REACT_APP_INSTAGRAM_URL || ''
const YOUTUBE_URL = process.env.REACT_APP_YOUTUBE_URL || ''
const FACEBOOK_URL = process.env.REACT_APP_FACEBOOK_URL || ''
const TIKTOK_URL = process.env.REACT_APP_TIKTOK_URL || ''


function SocialMedia () {
    const handleClickUrl = (url: string) => {
      window.open(url, '_blank')
    }
    const isMobile = useMediaQuery({ maxWidth: 600 })
    const socialMediaProps = {
        fontSize: isMobile ? 50 : 80, 
        cursor:"pointer", 
        margin: isMobile ? '10px' : '0px'
    }
    const tiktokProps = {
      height: isMobile ? '40px' : '60px', 
      width: isMobile ? '40px' : '60px'
    }
    const socialUrls = [
      {url: FACEBOOK_URL, iconType: 'facebook'},
      {url: INSTAGRAM_URL, iconType: 'instagram'},
      {url: YOUTUBE_URL, iconType: 'youtube'},
      {url: TIKTOK_URL, iconType: 'tiktok'}
    ]

    console.log("asd", process.env.INSTAGRAM_URL)
    return <Grid item md={12} container direction="row">
      <Grid item lg={4.5} md={4} sm={3}></Grid>
      <Grid item lg={3} md={4} sm={6} container className='social-media-container' justifyContent={isMobile ? 'center' : "space-around"} alignItems="center">
          {socialUrls.map(item => {
            let itemProps = {}
            if(item.iconType === 'tiktok') {
              itemProps = {...socialMediaProps, ...tiktokProps}
            } else {
              itemProps = {...socialMediaProps}
            }
            
            return(
              <SocialIcon 
              iconType={item.iconType} 
              iconProps={{sx: {...itemProps}, 
                onClick: () => handleClickUrl(item.url)
              }}
            />
            )
          })}
      </Grid>
      <Grid item lg={4.5} md={4} sm={3}></Grid>
  </Grid>
}

export default SocialMedia 