import MuiMasonry, { MasonryProps } from '@mui/lab/Masonry';

const Masonry: React.FC<MasonryProps> = (props) => (
  <MuiMasonry 
    columns={{ xs: 1, sm: 2, md: 4 }} 
    spacing={2} 
    {...props} 
  />
);

export default Masonry;
