import useGetData from '../../../hooks/useGetData/useGetData';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Masonry from '../../atoms/Masonry/Masonry';
import Loader from '../../atoms/Loader/Loader';
import Typography from '../../atoms/Typography/Typography';
import Gif from '../../molecules/Gif/Gif';

interface GifsPageProps {
  title: string;
  endpoint: string;
  updateFavourites: (id: string) => void;
  isFavourite: (id: string) => boolean;
  infiniteScroll?: boolean;
}

const GifsPage: React.FC<GifsPageProps> = ({ 
  endpoint, 
  infiniteScroll,
  title, 
  updateFavourites,
  isFavourite, 
}) => {
  const { data, error, loading } = useGetData({
    url: endpoint,
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
