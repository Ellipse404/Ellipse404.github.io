import { Box } from "@mui/system";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { encryptionAlgorithm } from "../../constants/secure";
import { decryptionAlgorithm } from "../../constants/secure";

const useStyles = makeStyles((theme) => ({
  parentDiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },

  centered_div: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    paddingBottom: "16px",
  },

  heading: {
    fontSize: "26px",
    color: "thistle",
  },
}));

const LandingComponent = () => {
  const classes = useStyles();
  const [crackedKey, setCrackedKey] = useState("");
  const navigate = useNavigate();

  const key = process.env.REACT_APP_SECRET_KEY;
  const nkey = encryptionAlgorithm(key);
  const dkey = decryptionAlgorithm(nkey);

  function truncateString(str, num) {
    return str.slice(2, 12);
  }

  const clickSubmit = (e) => {
    if (crackedKey == dkey) {
      navigate("/signup");
    }
  };
  console.log("crackedKey ->", crackedKey);

  return (
    <React.Fragment>
      <Box className={classes.parentDiv}>
        <Typography className={classes.heading}>Crack the Key !!</Typography>
        <Box className={classes.centered_div}>
          <p>{truncateString(nkey)}</p>
        </Box>
        <Box className={classes.centered_div}>
          <TextField
            value={crackedKey}
            onChange={(e) => setCrackedKey(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          color="success"
          onClick={(e) => clickSubmit()}
        >
          Submit
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default LandingComponent;
