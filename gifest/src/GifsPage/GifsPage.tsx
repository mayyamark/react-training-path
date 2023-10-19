import Typography from "../Typography/Typography";
import Masonry from '../Masonry/Masonry';
import useFetch from "../useFetch/useFetch";
import { Box, CircularProgress } from "@mui/material";

interface GifsPageProps {
  title: string;
  url: string;
  onDoubleClickGif: (id: string) => void;
  infiniteScroll?: boolean;
}

const GifsPage: React.FC<GifsPageProps> = ({ url, title, onDoubleClickGif, infiniteScroll }) => {
  const { data, error, loading } = useFetch({
    url,
    infiniteScroll
  });
  
  console.log({data})

  if (error) {
    return (
      <Typography variant='h3'>
        An error while fetching the data occurred!
      </Typography>
    );
  }

  return (
    <div>
      <Typography variant='h1'>
        {title}
      </Typography>
      <Masonry>
        {data?.map((gif) => {
            const src = gif.images.preview_gif.url || gif.images.original.url;

            return (
              <img
                key={gif.id}
                src={src}
                alt={gif.title}
                onDoubleClick={() => onDoubleClickGif(gif.id)}
              />
            );
          })}
      </Masonry>
      {loading && (
        <Box 
          display='flex' 
          justifyContent='center'
        >
          <CircularProgress color='inherit' />
        </Box>
      )}
    </div>
  );
};

export default GifsPage;
