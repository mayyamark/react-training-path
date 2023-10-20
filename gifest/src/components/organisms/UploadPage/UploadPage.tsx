import { useState } from 'react';
import { Link } from 'react-router-dom';
import useUploadData from '../../../hooks/useUploadData/useUploadData';
import Button from '../../atoms/Button/Button';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import FlexContainer from '../../atoms/FlexContainer/FlexContainer';
import Loader from '../../atoms/Loader/Loader';
import Typography from '../../atoms/Typography/Typography';
import UploadButton from '../../molecules/UploadButton/UploadButton';
import { Container } from './UploadPage.styled';

interface UploadPageProps {
  endpoint: string;
  onUploadCallback: (id: string) => void;
}

const UploadPage: React.FC<UploadPageProps> = ({ 
  endpoint,
  onUploadCallback
}) => {
  const [file, setFile] = useState<File | null>(null);
  const { loading, error, success, uploadData } = useUploadData({
    url: endpoint,
  });

  const handleUpload = async () => {
    if (!file) {
      return null;
    }

    const gifFormData = new FormData();
    gifFormData.append('file', file);

    await uploadData({
      body: gifFormData,
      onUploadCallback
    });

    setFile(null);
  };

  if (loading) {
    return <Loader />;
  }

  if (success) {
    return (
      <FlexContainer>
        <Typography variant='h1'>Your gif was uploaded!</Typography>
        <Typography>Click <Link to='my-gifs'>here</Link> to see your uploads.</Typography>
      </FlexContainer>
    );
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <FlexContainer>
      <Typography variant='h1'>Upload a gif</Typography>
      <Typography>We accept animated gifs or video files up to 100 MB.</Typography>
      {file ? (
        <FlexContainer sx={{ '> img': { marginBottom: 5 } }}>
          <img src={URL.createObjectURL(file)} alt='Gif to upload' />
          <Container>
            <Button 
              color='error' 
              onClick={() => setFile(null)}
            >
              Dismiss
            </Button>
            <Button onClick={handleUpload}>Upload</Button>
          </Container>
        </FlexContainer>
      ) : (
        <UploadButton 
          value={file} 
          onChange={(file) => {
            if (file) {
              setFile(file)
            }
          }}
        />
      )}
    </FlexContainer>
  );
};

export default UploadPage;
