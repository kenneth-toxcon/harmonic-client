import React from "react";
import routes from "../routes";
import MenuItem from "./MenuItem";
import { useHistory } from "react-router-dom";
import { Drawer, List } from "@material-ui/core";
import { HomeRounded, ListAltRounded, CodeRounded } from "@material-ui/icons";

const MenuDrawer = ({ isOpen, toggler }) => {
  const history = useHistory();

  const icons = [<HomeRounded />, <CodeRounded />, <ListAltRounded />];
  const menuOptions = [
    {
      id: "inicio-1",
      name: "Inicio",
      route: routes.home,
    },
    {
      id: "snippets-2",
      name: "Code Snippets",
      route: routes.snippets,
    },
    {
      id: "todoList-3",
      name: "Todo List",
      route: routes.todoList,
    },
  ];

  return (
    <>
      <Drawer anchor="left" open={isOpen} onClick={toggler}>
        <List>
          {menuOptions.map(({ id, name, route }, index) => (
            <MenuItem
              key={`${index}${id}`}
              id={id}
              name={name}
              route={route}
              icon={icons[index]}
              history={history}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
