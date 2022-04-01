import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { encryptionAlgorithm } from "../../constants/secure";
import { decryptionAlgorithm } from "../../constants/secure";
import { BioHazard } from "../../components/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  parentDiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    opacity: 0.8,
  },

  centered_div: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    paddingBottom: "16px",
    marginTop: "16px",
  },

  heading: {
    fontFamily: 'Rye  !important',
    fontSize: "30px",
    color: "yellowgreen",
    paddingBottom: "16px",
  },

  typo1: {
    color: "thistle",
  },

  hideCls: {
    display: "none !important",
    color: "white",
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
      toast.success("Success !!", { pauseOnHover: false, autoClose: 2000 });
      window.setTimeout(function () {
        navigate("/signup");
      }, 3000);
    } else {
      toast.error("Error !!", { pauseOnHover: false, autoClose: 2000 });
    }
  };

  return (
    <React.Fragment>
      <Box className={classes.parentDiv}>
        <Box sx={{ paddingBottom: "60px" }}>
          <BioHazard />
        </Box>
        <Typography className={classes.heading}>CRACK&nbsp;&nbsp;THE&nbsp;&nbsp;KEY !!</Typography>
        <Box className={classes.centered_div}>
          <Typography className={classes.typo1}>
            {truncateString(nkey)}
          </Typography>
        </Box>
        <pre style={{ marginTop: "0px !important" }}>
         Bravo !! u r in the game !! Find the actual key !!
        </pre>
        <p className={classes.hideCls}>{nkey}</p>
        <Box className={classes.centered_div}>
          <TextField
            sx={{ background: "whitesmoke" }}
            autoComplete='off'
            value={crackedKey}
            onChange={(e) => setCrackedKey(e.target.value)}
          />
        </Box>
        <Button
          type="submit"
          size="small"
          variant="contained"
          color="success"
          onClick={(e) => clickSubmit(e)}
        >
          Submit
        </Button>
        <ToastContainer position="bottom-right" theme="colored" />
      </Box>
    </React.Fragment>
  );
};

export default LandingComponent;
