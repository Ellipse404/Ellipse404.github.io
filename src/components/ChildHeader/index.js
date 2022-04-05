import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "#ccccff",
    padding: "12px",
    marginBottom: "16px",
  },
}));

const ChildHeaderComponent = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.header}>
        <Typography>{props.header || "header"}</Typography>
      </Box>
    </React.Fragment>
  );
};

export default ChildHeaderComponent;
