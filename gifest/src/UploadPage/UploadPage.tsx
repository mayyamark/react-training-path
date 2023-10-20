import { useState } from "react";
import FlexContainer from "../FlexContainer/FlexContainer";
import Typography from "../Typography/Typography";
import UploadButton from "../UploadButton/UploadButton";
import Button from "../Button/Button";
import { Container } from './UploadPage.styled';
import useUploadData from "../hooks/useUploadData/useUploadData";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

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

  console.log(file);

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
