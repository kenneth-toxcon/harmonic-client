import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const ErrorSnackBar = ({ message, open, handleClose }) => {
  return (
    <Snackbar autoHideDuration={3000} open={open} onClose={handleClose}>
      <MuiAlert elevation={6} variant="filled" severity="error">
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default ErrorSnackBar;
