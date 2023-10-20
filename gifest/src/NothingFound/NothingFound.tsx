import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import useGetData from "../useGetData/useGetData";
import FlexContainer from "../FlexContainer/FlexContainer";
import { Image } from "./NothingFound.styled";

interface NothingFoundPorps {
  endpoint: string;
  title?: React.ReactNode;
}

const NothingFound: React.FC<NothingFoundPorps> = ({ endpoint, title }) => {
  const { data, loading, refreshData } = useGetData({
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
          <FlexContainer>
            <Button onClick={() => refreshData()}>
              Give me another one
            </Button>
          </FlexContainer>
          <FlexContainer>
            <Image
              key={data[0].id}
              src={data[0].images.original.url}
              alt={data[0].title}
            />
          </FlexContainer>
        </>
      )}
    </div>
  );
};

export default NothingFound;
