import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '../Drawer/Drawer';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import { AppBar, Search, SearchIconWrapper, Input, Container, } from './Layout.styled';

const Layout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <AppBar position='fixed' color='secondary'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <HeaderTitle onClickIcon={() => setOpenDrawer(true)} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Input placeholder='Search…' />
          </Search>
        </Toolbar>
      </AppBar>

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;