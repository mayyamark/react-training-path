import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import useFetch from "../useFetch/useFetch";
import { Container, Image } from "./NothingFound.styled";

interface NothingFoundPorps {
  endpoint: string;
  title?: React.ReactNode;
}

const NothingFound: React.FC<NothingFoundPorps> = ({ endpoint, title }) => {
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
          <Container>
            <Button
              color='inherit'
              variant='outlined'
              onClick={() => refreshData()}
            >
              Give me another one
            </Button>
          </Container>
          <Container>
            <Image
              key={data[0].id}
              src={data[0].images.original.url}
              alt={data[0].title}
              // onDoubleClick={() => onDoubleClickGif(gif.id)}
            />
          </Container>
        </>
      )}
    </div>
  );
};

export default NothingFound;
