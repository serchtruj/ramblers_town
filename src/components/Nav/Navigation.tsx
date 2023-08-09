import { Grid } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import {
  AppBar,
  Link,
  Box,
  Divider,
  Drawer,
  IconButton,
  List, ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button
} from '@mui/material';
import './Nav.css'

const logoUrl = 'https://drive.google.com/uc?export=view&id=1IME7n2F6R9USHRezzxgb3cD0VmPJ47ab'
const drawerWidth = 240;
const navItems = [{ value: 'Email', type: 'email' }, { value: 'Mobile', type: 'mobile' }];
const phoneNumber = '3323388205';
const message = 'Hola, me gustaria tener información acerca de su banda';
const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function Navigation(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href="#" style={{ cursor: 'pointer' }}>
        <img src={logoUrl} alt={logoUrl} width={150} />
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.value} disablePadding className='nav-mobile-items'>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link target="_blank" style={{ color: 'black', textDecoration: 'none' }} href={item.type === 'email' ? `mailto:ramblerstown@gmail.com` : url} key={item.value}>
                <ListItemText primary={item.value} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return <Grid item md={12} container flexDirection="row" style={{ marginBottom: 100 }}>
    <AppBar component="nav" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon sx={{ color: 'black' }} />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
        >
          <Link href="#" style={{ cursor: 'pointer' }}>
            <img src={logoUrl} alt={logoUrl} width='100px' />
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Link target="_blank" className="navbar-btn" href={item.type === 'email' ? `mailto:ramblerstown@gmail.com` : url} key={item.value}>
              <Button sx={{ fontWeight: 900 }}>
                {item.value}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  </Grid>
}

export default Navigation 
