import React, { useState } from "react";
import { Button, Typography, Stack } from "@mui/material";
import LoginGithub from "react-login-github";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { GithubLogo } from "../../components/Icons";
import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  gitBtn: {
    color: "#fff",
    width: "300px !important",
    height: "60px !important",
    backgroundColor: "#444",
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: "6px !important",
  },

  gitText: {
    fontFamily: "Helvetica Neue",
    color: "whitesmoke",
    paddingLeft: "12px !important",
  },
}));

const GithubLoginComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const localUrl = window.location.href.indexOf("localhost") !== -1 ? true : false;
  const onSuccess = (response) => {
    console.log(response);
    toast.success("Success !!", { pauseOnHover: false, autoClose: 1000 });
    window.setTimeout(function () {
      navigate("/login");
    }, 2000);
  };
  const onFailure = (err) => {
    console.error(err);
    toast.error(err, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    window.setTimeout(function () {
      navigate("/signup");
    }, 2000);
  };
  console.log(window.location.href);
  console.log("URL TYPE => ", localUrl ? "localUrl" : "productionUrl");
  return (
    <React.Fragment>
      <LoginGithub
        className={classes.gitBtn}
        clientId={
          localUrl
            ? process.env.REACT_APP_GITHUB_LOCAL_LOGIN_KEY
            : process.env.REACT_APP_GITHUB_PRODUCTION_LOGIN_KEY
        }
        buttonText={
          <Stack direction="row" justifyContent="center">
            <GithubLogo />
            <Typography className={classes.gitText}>
              LOGIN WITH GITHUB.
            </Typography>
          </Stack>
        }
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </React.Fragment>
  );
};

export default GithubLoginComponent;
