import React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          height: "75px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3f51b5",
          color: "white",
        }}
      >
        <Typography>
          &copy; {new Date().getFullYear()} | Made with <del>💖</del> a 💻 by
          Ktoxcon
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
