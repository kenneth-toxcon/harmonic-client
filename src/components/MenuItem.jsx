import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";

const MenuItem = ({ id, name, route, icon, history }) => {
  const redirect = () => history.push(route);

  return (
    <ListItem button key={id} onClick={redirect}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default MenuItem;
