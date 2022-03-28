import React, { useState } from "react";
import { Box, Button, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  emailValidation,
  passwordValidation,
} from "../../schema/validation_schema";
import TextBoxInputField from "../../components/CustomTextField";
import Google from "./Google";
import { authenticate, isAuth } from '../../utils/helper'

const useStyles = makeStyles((theme) => ({
  parentDiv: {
    display: "flex",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },

  childDiv: {
    display: "flex",
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke !important",
  },

  centered_div: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },

  stackClass: {
    width: "600px !important",
    height: "400px !important",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  txtBox: {
    width: "100%",
  },

  controlledClass: {
    padding: "6px",
  },
}));

const SignUpComponent = () => {
  const navigate = useNavigate();

  const informParent = response => {
    authenticate(response, () => {
      navigate('/login');
    });
};
  const classes = useStyles();
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        username: yup.string().required("Username Required"),
        email: emailValidation,
        password: passwordValidation,
        confirmpassword: yup
          .string()
          .oneOf([yup.ref("password"), null], "Passwords must match"),
      })
    ),
    mode: "all",
  });
  const url_api = process.env.REACT_APP_API_URL;

  const onSubmit = async (data) => {
    try {
      await axios({
        method: "POST",
        url: url_api,
        data: data,
      })
        .then((response) => {
          console.log("success", response);
          toast.success("Success !", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          console.log("error", err);
          toast.error("failed", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } catch (err) {
      console.log("what the err !!", err);
    }
  };

  return (
    <React.Fragment>
      <Box className={classes.parentDiv}>
        <Box className={classes.childDiv}>
          {/* <div className="glogin">
            <Google informParent={informParent} />
          </div> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Box className={classes.stackClass}>
                <Box>
                  <Controller
                    name="username"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        className={classes.txtBox}
                        {...field}
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        placeholder="Username"
                        // helperText={formState.}
                      />
                    )}
                  />
                </Box>
                <Box>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        className={classes.txtBox}
                        {...field}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        placeholder="Email"
                        // error={Boolean(formState.errors.email_id)}
                        // helperText={
                        //   formState.errors.email_id
                        //     ? formState.errors.email_id?.message
                        //     : " "
                        // }
                      />
                    )}
                  />
                </Box>
                <Box>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        className={classes.txtBox}
                        {...field}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        placeholder="Password"
                      />
                    )}
                  />
                </Box>
                <Box>
                  <Controller
                    name="confirmpassword"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        className={classes.txtBox}
                        {...field}
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    )}
                  />
                </Box>
                <Box className={classes.centered_div}>
                  <Button variant="contained" color="success" type="submit">
                    Submit
                  </Button>
                </Box>
              </Box>
            </FormControl>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </form>
         
        </Box>
        
      </Box>
      <Box sx={{position: 'absolute', top:40, right:40}}>
          <div className="glogin">
            <Google informParent={informParent} />
          </div>
          </Box>
      
    </React.Fragment>
  );
};

export default SignUpComponent;
