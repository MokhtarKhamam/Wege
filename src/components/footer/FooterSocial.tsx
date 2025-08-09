import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterSocial = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography fontSize={"24px"} sx={{ color: "white" }} fontWeight="bold">
        Wege
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <EmailIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default FooterSocial;
