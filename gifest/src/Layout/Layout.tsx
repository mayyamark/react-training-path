import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '../Drawer/Drawer';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import { AppBar, Search, SearchIconWrapper, Input, Container, } from './Layout.styled';
import { InputProps } from '@mui/material';

interface LayoutProps {
  inputProps: InputProps;
}

const Layout: React.FC<LayoutProps> = ({ inputProps }) => {
  const navigate = useNavigate();

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
            <Input 
              placeholder='Search…'
              {...inputProps}
              onKeyUp={(event) => {
                if (event.key === 'Enter') {
                  if (inputProps.value) {
                    navigate({
                      pathname: '/search',
                      search: `?query=${inputProps.value}`,
                    });
                  } else {
                    navigate({
                      pathname: '/',
                    });
                  }
                }
              }}
            />
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