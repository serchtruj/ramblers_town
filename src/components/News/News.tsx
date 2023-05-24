import {Grid} from '@mui/material'
import './News.css'

const imagesEvents = [
  'https://drive.google.com/uc?export=view&id=1Jr_Zi7JqqJmanoesP3KrcCNuWJ6FhROF',
  'https://drive.google.com/uc?export=view&id=18Pe425CQJ53gvLKC4qhpyjDYByUZT3qf'
]

const ramblersLogo = 'https://drive.google.com/uc?export=view&id=1sv18AgTbQZnXcdoMy5K65ej074zAdxGB'

function News () {
    return <Grid item md={6} container alignContent='center' justifyContent='start'>
    <img src={ramblersLogo} width={500} height={500} alt={ramblersLogo}/>
  </Grid>
}

export default News 
