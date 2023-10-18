import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

interface HeaderTitleProps {
  onClickIcon: () => void;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ onClickIcon }) => {
  return (
    <Box display='flex' gap={1}>
      <IconButton onClick={onClickIcon}>
        <MenuIcon htmlColor='white' />
      </IconButton>
      <Link to='/'>
        <img 
          src='/gifest.png' 
          alt='Gifest logo' 
          width={100} 
        />
      </Link>
    </Box>
  );
};

export default HeaderTitle;
