import { ChangeEvent } from 'react';
import PublishIcon from '@mui/icons-material/Publish';
import Button from '../../atoms/Button/Button';
import { Input } from './UploadButton.styled'

interface UploadButtonProps {
  value: any;
  onChange: (data: File | undefined) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ value, onChange }) => {
  return (
    <Button 
      component='label'
      startIcon={<PublishIcon />}
    >
      Pick a file
      <Input 
        onChange={(ev: ChangeEvent<HTMLInputElement>) => (
          onChange(ev?.target?.files?.[0])
        )} 
        type='file'
      />
    </Button>
  );
};

export default UploadButton;
