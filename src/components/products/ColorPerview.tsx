import { alpha, styled } from "@mui/material";
import React from "react";



const ItemRoot = styled("li")(({ theme, color }) => ({
  borderRadius: "50%",
  width: "16px",
  height: "16px",
  marginLeft: "2px",
  backgroundColor: color,
  border: `solid 2px ${theme.palette.grey[200]}`,
  boxShadow: `inset -1px 1px 2px ${alpha(theme.palette.primary.main, 0.24)}`,
}));

const ColorPreviewRoot = styled('ul')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  listStyleType: "none"
}));

const ColorPerview = ({
  colors,
  limit = 3,
}: {
  colors: string[];
  limit?: number;
}) => {
  return (
    <ColorPreviewRoot>
      {colors.map((color, index: number) => (
        <ItemRoot key={color + index} color={color}></ItemRoot>
      ))}
    </ColorPreviewRoot>
  );
};

export default ColorPerview;
