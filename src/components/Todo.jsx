import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Todo = ({ num, id, title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {num + 1} | {title.toUpperCase()}
        </Typography>
        <Typography color="textSecondary">{id}</Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Todo;
