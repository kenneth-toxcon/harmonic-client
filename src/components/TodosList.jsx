import React from "react";
import Todo from "./Todo";
import Box from "@material-ui/core/Box";

const TodosList = ({ todos }) => {
  return (
    <Box overflow="scroll" maxHeight="350px">
      {todos.map(({ _id, title, description }, index) => (
        <Box key={`${index}${_id}`} m={2}>
          <Todo
            key={_id}
            num={index}
            id={_id}
            title={title}
            description={description}
          />
        </Box>
      ))}
    </Box>
  );
};

export default TodosList;
