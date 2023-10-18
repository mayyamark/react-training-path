import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider/Divider';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import { StyledDrawer, DrawerLink, UploadLink } from './Drawer.styled';

interface DrawerProps {
  onClose: () => void;
  open: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  return (
    <StyledDrawer
      open={open}
      onClose={onClose}
      sx={{ position: 'relative', width: '200px'}}
    >
      <Toolbar sx={{ backgroundColor: '	#383838' }}>
        <HeaderTitle onClickIcon={onClose} />
      </Toolbar>

      <DrawerLink to='favourites'>
        Favourites
      </DrawerLink>
      
      <Divider />

      <DrawerLink to='my-gifs'>
        My gifs
      </DrawerLink>

      <Divider />

      <UploadLink to='upload'>Upload</UploadLink>
    </StyledDrawer>
  );
};

export default Drawer;
