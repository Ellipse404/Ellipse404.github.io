import React from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {GoogleLogo} from "../../components/Icons/index"

const useStyles = makeStyles((theme) => ({
  customBtn: {
    width: "300px !important",
    height: "60px !important",
    background: "#E74C3C !important",
    borderRadius: "6px !important"
  },

  customText: {
    fontFamily: "Helvetica Neue",
    color: "whitesmoke",
    paddingLeft:"8px"

  }
}));

const Google = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const responseGoogle = (response) => {
    console.log(
      "firstname :: ",
      response.profileObj.givenName,
      "lastname :: ",
      response.profileObj.familyName,
      "Email Id :: ",
      response.profileObj.email,
      "Google Id :: ",
      response.profileObj.googleId
    );

    axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL,
      data: { response },
    })
      .then((response) => {
        console.log("GOOGLE SIGNIN SUCCESS", response);
        console.log(
          "GOOGLE SIGNIN SUCCESS response.tokenId -->>",
          response.tokenId
        );
        toast.success("Success !!", { pauseOnHover: false, autoClose: 1000 });
        window.setTimeout(function () {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.log("GOOGLE SIGNIN ERROR", error);
        toast.error(error, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div className="pb-3">
      <GoogleLogin
        render={(renderProps) => (
          <Button
            className={classes.customBtn}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <GoogleLogo />
            <Typography className={classes.customText}>Login with Google</Typography>
          </Button>
        )}
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        // buttonText="Login with Google"
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Google;
