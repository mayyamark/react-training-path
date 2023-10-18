import InputBase from '@mui/material/InputBase';
import MuiAppBar from '@mui/material/AppBar';
import { alpha, styled } from '@mui/material/styles';

export const AppBar = styled(MuiAppBar)({
  backgroundColor: 'black',
});

export const Image = styled('img')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '70%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Input = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

export const Container = styled('div')(({ theme }) => ({
  margin: theme.spacing(10, 4),

  [theme.breakpoints.up('sm')]: {
    margin: theme.spacing(12, 10),
  },

  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(12, 15),
  },

  [theme.breakpoints.up('lg')]: {
    margin: theme.spacing(12, 20),
  }
}));
