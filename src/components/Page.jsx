import React from "react";
import { Container, Box, Typography, Divider } from "@material-ui/core";

const Page = ({ title, maxWidth = "md", children }) => {
  return (
    <Container maxWidth={maxWidth}>
      <Box my={5}>
        <Box my={4}>
          <Typography variant="h2">{title}</Typography>
        </Box>
        <Divider />
        <Box>{children}</Box>
      </Box>
    </Container>
  );
};

export default Page;
