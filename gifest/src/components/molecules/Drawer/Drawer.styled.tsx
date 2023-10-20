import { Link } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer/Drawer';
import styled from '@mui/material/styles/styled';

export const StyledDrawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      width: 250
    }
  }
}));

export const DrawerLink = styled(Link)(({ theme }) => ({ 
  textDecoration: 'none',
  padding: theme.spacing(2),
  color: theme.palette.common.black,
  fontFamily: 'Virgil',
}));

export const UploadLink = styled(DrawerLink)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: '#383838',
  position: 'absolute',
  bottom: 0,
  width: '100%'
})); 