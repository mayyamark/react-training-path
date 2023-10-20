import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SmsIcon from '@mui/icons-material/Sms';
import { Container } from './SocialMediaShare.styled';
import { GifObject } from '../types';

interface SocialMediaShareProps {
  gif: GifObject;
}

const SocialMediaShare: React.FC<SocialMediaShareProps> = ({ gif }) => {
  return (
    <Container>
      <FacebookIcon 
        cursor='pointer'
        onClick={() => {
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${gif.embed_url}`,
            "_blank"
          );
        }}
      />
      <TwitterIcon 
        cursor='pointer'
        onClick={() => {
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(gif.title)}&url=${
              gif.embed_url
            }`,
            "_blank"
          );
        }}
      />
      <EmailIcon 
        cursor='pointer'
        onClick={() => {
          window.open(
            `mailto:?subject=${encodeURIComponent(
              gif.title
            )}&body=${encodeURIComponent(gif.embed_url)}`,
            "_self"
          );
        }}
      />
      <SmsIcon 
        cursor='pointer'
        onClick={() => {
          window.open(
            `sms:?&body=${encodeURIComponent(gif.title)}: ${encodeURIComponent(gif.embed_url)}`,
            "_self"
          );
        }} 
      />
    </Container>
  )
};

export default SocialMediaShare;
