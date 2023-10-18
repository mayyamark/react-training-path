import MuiTypography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

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
  })
}));

export default Typography;