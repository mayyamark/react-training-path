import MuiLink from "@mui/material/Link/Link";
import { alpha, styled } from "@mui/material";

export const Container = styled('div')({
  position: 'relative',

  '& > div': {
    visibility: 'none',
    opacity: 0,
    transition: 'visibility 0s, opacity 0.5s linear'
  },

  '&:hover' : {
    '& > div': {
      visibility: 'visible',
      opacity: 1,
    }
  }
});

const TransparentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  width: '100%',
  backgroundColor: alpha(theme.palette.common.black, 0.5),
  color: theme.palette.common.white,

  '& > *': {
    margin: theme.spacing(0.5) + '!important',
  }
}));

export const BottoomContainer = styled(TransparentContainer)(({ theme }) => ({
  bottom: 3,
  justifyContent: 'space-between',
  alignItems: 'center'
}));

export const TopContainer = styled(TransparentContainer)(({ theme }) => ({
  top: 0,
  flexDirection: 'column'
}));

export const Link = styled(MuiLink)(({ theme, variant }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  fontFamily: 'Virgil',
  color: theme.palette.common.white,

  ...(variant === 'caption' && {
    fontSize: '0.8rem',
  }),

  ...(variant === 'body2' && {
    fontSize: '0.875rem',
  }),
}));

export const UserLink = styled(Link)({
  whiteSpace: 'nowrap', 
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const Avatar = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  maxWidth: 20,
  maxHeight: 20,
  padding: theme.spacing(0, 0.3)
}));

export const Image = styled('img')({
  width: '100%',
});