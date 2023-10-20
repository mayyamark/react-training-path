import Typography from "../Typography/Typography";
import Masonry from '../Masonry/Masonry';
import useGetData from "../hooks/useGetData/useGetData";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Gif from "../Gif/Gif";

interface GifsPageProps {
  title: string;
  url: string;
  updateFavourites: (id: string) => void;
  isFavourite: (id: string) => boolean;
  infiniteScroll?: boolean;
}

const GifsPage: React.FC<GifsPageProps> = ({ 
  url, 
  title, 
  updateFavourites,
  isFavourite, 
  infiniteScroll 
}) => {
  const { data, error, loading } = useGetData({
    url,
    infiniteScroll
  });

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      <Typography variant='h1'>
        {title}
      </Typography>
      <Masonry>
        {data?.map((gif) => (
          <Gif 
            key={gif.id}
            gif={gif}
            updateFavourites={updateFavourites}
            isFavourite={isFavourite}
          />)
        )}
      </Masonry>
      {loading && <Loader />}
    </div>
  );
};

export default GifsPage;
