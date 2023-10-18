import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { AppBar, Image, Search, SearchIconWrapper, Input, Container, } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <AppBar position='fixed' color='secondary'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display='flex' gap={1}>
            <IconButton color='inherit'>
              <MenuIcon />
            </IconButton>
            <Image src='/gifest.png' alt='Gifest logo' width={100} />
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Input placeholder='Search…' />
          </Search>
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;