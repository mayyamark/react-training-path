import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { GifObject } from '../../../types';
import SocialMediaShare from '../SocialMediaShare/SocialMediaShare';
import { 
  Container, 
  Link, 
  BottoomContainer, 
  Image, 
  TopContainer, 
  Avatar,
  UserLink, 
} from './Gif.styled';

interface GifProps {
  gif: GifObject;
  updateFavourites: (id: string) => void;
  isFavourite: (id: string) => boolean;
}

const Gif: React.FC<GifProps> = ({ gif, updateFavourites, isFavourite }) => {
  return (
    <Container>
      <TopContainer>
        {gif.user && (
          <UserLink href={gif.user.profile_url} target='_blank' variant='caption'>
            <Avatar src={gif.user.avatar_url} alt={gif.username} />
            {gif.username}
          </UserLink>
        )}
        <Link href={gif.bitly_url} target='_blank' variant='body2'>
          {gif.title}
        </Link>
      </TopContainer>
      <Image
        src={gif.images.downsized_medium.url}
        alt={gif.title}
        onDoubleClick={() => updateFavourites(gif.id)}
      />
      <BottoomContainer>
        {isFavourite(gif.id) ? (
          <FavoriteIcon
            color='error'
            cursor='pointer' 
            onClick={() => updateFavourites(gif.id)}
          />
        ) : (
          <FavoriteBorderIcon 
            color='inherit' 
            cursor='pointer'
            onClick={() => updateFavourites(gif.id)}
          />
        )}
        <SocialMediaShare gif={gif} />
      </BottoomContainer>
    </Container>  
  );
};

export default Gif;
