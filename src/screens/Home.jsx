import React from "react";
import Page from "../components/Page";
import { Box, Divider, Typography } from "@material-ui/core";

export const Home = ({}) => {
  return (
    <Page title="Code Challenge">
      <Box myt={2}>
        <Box my={3}>
          <Typography my={3} variant="h5">
            La Todo List no funciona 😕, ¿Puedes repararla?
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="h5">
            Haz conseguido un nuevo empleo y te asignan al proyecto{" "}
            <b>Todo List</b>, uno bastante sencillo. Nada puede salir mal.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography my={3} variant="h5">
            El proyecto no tiene nada que no hayas visto antes, únicamente debes
            ingresar tu tipo de usuario antes de agregar un nuevo "todo".
          </Typography>
        </Box>
        <Box my={3}>
          <Typography my={3} variant="h5">
            De pronto te das cuenta que los "todos" no están siendo agregados,
            luce como un problema muy fácil.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="h5">
            ¿Qué está ocurriendo? ¿Se está guardando correctamente la
            información en la base de datos? ¿Es un problema en el cliente o el
            servidor?
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box my={2}>
        <Typography variant="h4">Stack De Tecnologías Utilizadas</Typography>
        <>
          <ul>
            <li>
              <Typography variant="h5">JavaScript</Typography>
            </li>
            <li>
              <Typography variant="h5">Node JS</Typography>
            </li>
            <li>
              <Typography variant="h5">MongoDB</Typography>
            </li>
            <li>
              <Typography variant="h5">Express</Typography>
            </li>
            <li>
              <Typography variant="h5">React</Typography>
            </li>
          </ul>
        </>
      </Box>
    </Page>
  );
};
