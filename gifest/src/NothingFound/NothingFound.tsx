import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Loader from "../Loader/Loader";
import Typography from "../Typography/Typography";
import useFetch from "../useFetch/useFetch";
import { useState } from "react";

interface NothingFoundPorps {
  endpoint: string;
  title?: React.ReactNode;
}

const NothingFound: React.FC<NothingFoundPorps> = ({ endpoint, title }) => {
  const [count, setCount] = useState(1);

  const { data, loading, refreshData } = useFetch({
    url: endpoint,
    infiniteScroll: false,
  });

  return (
    <div>
      <Typography variant='h2'>
        {title || <>We couldn't find anything!<br />Here's a random gif for you:</>}
      </Typography>
      {loading && <Loader />}
      {!loading && data.length > 0 && (
        <>
          <Box
            width='100%' 
            display='flex' 
            justifyContent='center'
            mb={3}
          >
            <Button
              color='inherit'
              variant='outlined'
              onClick={() => {
                setCount((prev) => prev + 1);
                refreshData();
              }}
            >
              Give me another one
            </Button>
          </Box>
          {count > 1 && <Typography variant='h4'>#{count}</Typography>}
          <Box 
            width='100%' 
            display='flex' 
            justifyContent='center'
            mb={3}
          >
            <img
              key={data[0].id}
              src={data[0].images.original.url}
              alt={data[0].title}
              // onDoubleClick={() => onDoubleClickGif(gif.id)}
            />
          </Box>
        </>
      )}
    </div>
  );
};

export default NothingFound;
