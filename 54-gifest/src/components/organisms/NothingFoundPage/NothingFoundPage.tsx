import useGetData from '../../../hooks/useGetData/useGetData';
import Button from '../../atoms/Button/Button';
import FlexContainer from '../../atoms/FlexContainer/FlexContainer';
import Loader from '../../atoms/Loader/Loader';
import Typography from '../../atoms/Typography/Typography';
import { Image } from './NothingFoundPage.styled';

interface NothingFoundPorps {
  endpoint: string;
  title?: React.ReactNode;
}

const NothingFoundPage: React.FC<NothingFoundPorps> = ({ endpoint, title }) => {
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

export default NothingFoundPage;
