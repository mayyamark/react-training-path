import Box from "@mui/material/Box/Box";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

const Loader = () => {
  return (
    <Box 
      display='flex' 
      justifyContent='center'
    >
      <CircularProgress color='inherit' />
    </Box>
  );
};

export default Loader;
