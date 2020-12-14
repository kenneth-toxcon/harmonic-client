import React from "react";
import MenuDrawer from "./MenuDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";

const Navbar = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <MenuDrawer isOpen={isOpen} toggler={toggleDrawer} />
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleDrawer}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Power-Up Your Developer Career</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
