import React from "react";
import Axios from "axios";
import Page from "../components/Page";
import TodosList from "../components/TodosList";
import ErrorSnackBar from "../components/SnackBar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const TodoList = () => {
  const classes = useStyles();

  const [todos, setTodos] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [role, setRole] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [error, setError] = React.useState(null);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = React.useState(false);

  const [roleError, setRoleError] = React.useState(null);
  const [titleError, setTitleError] = React.useState(null);
  const [descriptionError, setDescriptionError] = React.useState(null);

  const fetchTodos = async () => {
    const { data } = await Axios("http://localhost:3500/getTodos");
    setTodos(data);
  };

  React.useEffect(() => {
    fetchTodos();
  }, [todos]);

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleRoleChange = (event) => {
    const value = event.target.value;
    setRole(value);
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorSnackbarOpen(false);
  };

  const addTodo = async () => {
    try {
      const message = "Información Requerida";

      if (!title) {
        setTitleError(message);
        setError(new Error(message));
        setErrorSnackbarOpen(true);
      } else if (!description) {
        setDescriptionError(message);
        setError(new Error(message));
        setErrorSnackbarOpen(true);
      } else if (!role) {
        setRoleError(message);
        setError(new Error(message));
        setErrorSnackbarOpen(true);
      } else {
        const todo = { title, description, role };
        await Axios.post("http://localhost:3500/addTodo", todo);
        setError(null);
      }
    } catch (error) {
      setError(new Error(error));
      setErrorSnackbarOpen(true);
    }
  };

  return (
    <Page maxWidth="lg" title="Todo List">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TodosList todos={todos} />
          </Grid>
          <Grid item xs={6}>
            <Box m={2}>
              <TextField
                label="Titulo"
                variant="outlined"
                size="medium"
                fullWidth
                value={title}
                onChange={handleTitleChange}
                error={titleError}
              />
            </Box>
            <Box m={2}>
              <TextField
                label="Descripción"
                variant="outlined"
                size="medium"
                multiline
                rows={5}
                fullWidth
                value={description}
                onChange={handleDescriptionChange}
                error={descriptionError}
              />
            </Box>
            <Box m={2}>
              <TextField
                label="Rol De Usuario"
                variant="outlined"
                size="medium"
                fullWidth
                value={role}
                onChange={handleRoleChange}
                error={roleError}
              />
            </Box>
            <Box m={2}>
              <Button
                color="primary"
                size="large"
                variant="contained"
                fullWidth
                onClick={addTodo}
              >
                Agregar
              </Button>
            </Box>
          </Grid>
        </Grid>
        {error && (
          <ErrorSnackBar
            open={errorSnackbarOpen}
            message={error.message}
            handleClose={handleSnackBarClose}
          />
        )}
      </div>
    </Page>
  );
};
