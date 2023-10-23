import styled from '@mui/material/styles/styled';

const FlexContainer = styled('div')(({ theme }) => ({
  width: '100%', 
  display: 'flex',  
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: theme.spacing(3)
}));

export default FlexContainer;
