import React from "react";
import { Button, Typography } from "@mui/material";
import LoginGithub from "react-login-github";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  gitBtn: {
    color: '#fff',
    width: "300px !important",
    height: "60px !important",
    backgroundColor: '#444',
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: "6px !important"
  },

  gitText: {
    fontFamily: "Helvetica Neue",
    color: "whitesmoke",
  }
}))

const GithubLoginComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const onSuccess = (response) => {console.log(response); navigate('/login')}
  const onFailure = (response) => {console.error(response); navigate('/')}
  return (
    <React.Fragment>
      <LoginGithub
        className={classes.gitBtn}
        clientId={process.env.REACT_APP_GITHUB_LOGIN_KEY}
        buttonText={<Typography className={classes.gitText}>Login with Github</Typography>}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </React.Fragment>
  );
};

export default GithubLoginComponent;
