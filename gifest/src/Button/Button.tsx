import MuiButton, { ButtonProps } from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

const Button = styled(
  (props: ButtonProps) => (
    <MuiButton variant='outlined' color='inherit' {...props} />
  ))(({ theme }) => ({
  fontFamily: 'Virgil',
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(5)
  },
}));

export default Button;