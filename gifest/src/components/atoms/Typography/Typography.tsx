import MuiTypography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';

const Typography = styled(MuiTypography)(({ theme, variant }) => ({
  fontFamily: 'Virgil',
  textAlign: 'center',
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(5)
  },

  ...(variant === 'h1' && {
    fontSize: '2rem', 

    [theme.breakpoints.up('md')]: {
      fontSize: '6rem', 
    },
  }),

  ...(variant === 'h2' && {
    fontSize: '2.75rem', 

    [theme.breakpoints.up('md')]: {
      fontSize: '3.75rem', 
    },
  }),
}));

export default Typography;