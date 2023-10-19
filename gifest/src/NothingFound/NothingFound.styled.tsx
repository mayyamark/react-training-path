import styled from "@mui/material/styles/styled";

export const Container = styled('div')(({ theme }) => ({
  width: '100%', 
  display: 'flex',  
  justifyContent: 'center',
  marginBottom: theme.spacing(3)
}));

export const Image = styled('img')({
  maxWidth: '100vw',
});
