import { styled } from "@mui/material/styles";

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4)
}))