import React from "react";
import { Box, Typography } from "@material-ui/core";

const Image = ({ title, src, alt }) => {
  return (
    <Box my={4}>
      <Typography variant="h4">{title}</Typography>
      <Box m={4}>
        <img
          style={{
            maxHeight: "75%",
            maxWidth: "100%",
          }}
          src={src}
          alt={alt}
        />
      </Box>
    </Box>
  );
};

export default Image;
