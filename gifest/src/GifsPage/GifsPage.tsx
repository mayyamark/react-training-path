import Typography from "../Typography/Typography";
import Masonry from '../Masonry/Masonry';
import useGetData from "../useGetData/useGetData";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface GifsPageProps {
  title: string;
  url: string;
  onDoubleClickGif: (id: string) => void;
  infiniteScroll?: boolean;
}

const GifsPage: React.FC<GifsPageProps> = ({ url, title, onDoubleClickGif, infiniteScroll }) => {
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
          <img
            key={gif.id}
            src={gif.images.downsized_medium.url}
            alt={gif.title}
            onDoubleClick={() => onDoubleClickGif(gif.id)}
          />)
        )}
      </Masonry>
      {loading && <Loader />}
    </div>
  );
};

export default GifsPage;
