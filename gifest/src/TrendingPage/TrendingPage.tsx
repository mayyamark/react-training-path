import Typography from "../Typography/Typography";
import Masonry from '../Masonry/Masonry';
import useFetch from "../useFetch/useFetch";
import { API_KEY, GET_ENDPOINT } from "../constants";

const TrendingPage = () => {
  const { data, error } = useFetch({
    url: `${GET_ENDPOINT}/trending?api_key=${API_KEY}`
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
        Trending
      </Typography>
      <Masonry>
        {data?.map((gif) => {
            const src = gif.images.preview_gif.url || gif.images.original.url;

            return (
              <img
                key={src}
                src={src}
                alt={gif.title}
              />
            );
          })}
      </Masonry>
    </div>
  );
};

export default TrendingPage;
