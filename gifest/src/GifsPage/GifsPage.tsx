import Typography from "../Typography/Typography";
import Masonry from '../Masonry/Masonry';
import useFetch from "../useFetch/useFetch";
import Loader from "../Loader/Loader";

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
        {data?.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.preview_gif.url}
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
