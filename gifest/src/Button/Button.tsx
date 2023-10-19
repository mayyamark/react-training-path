import MuiButton from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

const Button = styled(MuiButton)(({ theme, variant }) => ({
  fontFamily: 'Virgil',
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(5)
  },
}));

export default Button;