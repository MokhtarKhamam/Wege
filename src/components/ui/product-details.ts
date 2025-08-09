import { alpha, Button, styled, Typography } from "@mui/material";

export const New = styled(Typography)(({ theme }) => ({
  borderRadius: 5,
  width: "fit-content",
  padding: "0.25rem 0.5rem",
  fontWeight: "bold",
  fontSize: "12px",
  marginLeft: "2px",
  color: theme.palette.secondary.main,
  backgroundColor: alpha(theme.palette.secondary.main, 0.25),
}));

export const InStock = styled(Typography)(({ theme }) => ({
  borderRadius: 5,
  width: "fit-content",
  padding: "0.25rem 0.5rem",
  fontWeight: "bold",
  fontSize: "12px",
  marginLeft: "2px",
  color: theme.palette.info.main,
}));

export const Colors = styled("li")(({ theme, color }) => ({
  borderRadius: "50%",
  width: "35px",
  height: "35px",
  marginLeft: "2px",
  backgroundColor: color,
  border: `solid 2px ${theme.palette.grey[200]}`,
  boxShadow: `inset -1px 1px 2px ${alpha(theme.palette.primary.main, 0.24)}`,
}));

export const ColorRoot = styled("ul")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  listStyleType: "none",
}));

export const ButtonCart = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  fontWeight: "bold",
}));
