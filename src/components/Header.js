import React from "react";
import Paper from "@material-ui/core/Paper";

const Header = () => {
    return (
      <Paper style = {{ padding: "5px", display: "flex" }} square elevation = {3} >
        <img
        className="logo"
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnldy4YIp3kDyCMJfJAniBMbMJaHUaG1ZjlQ&usqp=CAU" alt ="logo">
        </img>
        <h1 className = "siteName" > Contact App </h1>
        </Paper>
    );
};

export default Header;
