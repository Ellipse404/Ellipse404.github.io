import React, { useState } from "react";
import { Box, Button, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { startsWith } from "lodash";
import "react-phone-input-2/lib/style.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  userNameValidation,
  emailValidation,
  contactNoValidation,
  passwordValidation,
  confirmPasswordValidation,
} from "../../schema/validation_schema";
import TextBoxInputField from "../../components/CustomTextField";
import Google from "./Google";
import { authenticate, isAuth } from "../../utils/helper";
import GithubLoginComponent from "./Github";

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
  },

  centered_div: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },

  stackClass: {
    width: "600px !important",
    height: "500px !important",
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

  helperText: {
    color: "#d32f2f !important",
    backgroundColor: "transparent !important",
    fontWeight: "400",
    fontSize: "0.75rem",
    lineHeight: "1.66",
    letterSpacing: "0.03333em",
    marginLeft: "14px",
  },

  btnContainer: {
    position: "absolute",
    top: 40,
    right: 40,
    display: "flex",
    flexDirection: "column",
    height: "140px",
    justifyContent: "space-between",
  },
}));

const SignUpComponent = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        username: userNameValidation,
        email: emailValidation,
        contact_no: contactNoValidation,
        password: passwordValidation,
        confirmpassword: confirmPasswordValidation,
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
          localStorage.setItem("username", response.data[0].username)
          toast.success("Success !!", { pauseOnHover: false, autoClose: 1000 });
          window.setTimeout(function () {
            navigate("/login");
          }, 2000);
        })
        .catch((err) => {
          console.log("error", err);
          toast.error(err, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
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
          <form>
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
                        name="username"
                        label="Username*"
                        variant="outlined"
                        placeholder="Username"
                        error={errors.username ? true : false}
                        helperText={errors.username?.message}
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
                        name="email"
                        label="Email*"
                        variant="outlined"
                        placeholder="Email"
                        error={errors.email ? true : false}
                        helperText={errors.email?.message}
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
                        name="password"
                        label="Password*"
                        variant="outlined"
                        type="password"
                        placeholder="Password"
                        error={errors.password ? true : false}
                        helperText={errors.password?.message}
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
                        name="confirmpassword"
                        label="Confirm Password*"
                        variant="outlined"
                        type="password"
                        placeholder="Confirm Password"
                        error={errors.confirmpassword ? true : false}
                        helperText={errors.confirmpassword?.message}
                      />
                    )}
                  />
                </Box>
                <Box>
                  <Controller
                    name="contact_no"
                    control={control}
                    render={({ field }) => (
                      <>
                        <PhoneInput
                          {...field}
                          enableSearch
                          placeholder="Contact No*"
                          disableCountryGuess
                          disableCountryCode
                          country={"in"}
                          onChange={(
                            value,
                            { dialCode },
                            e,
                            formattedValue
                          ) => {
                            if (dialCode) {
                              setValue("dial_code", dialCode);
                              if (startsWith(value, dialCode)) {
                                field.onChange(value.replace(dialCode, ""));
                              } else {
                                field.onChange(value);
                              }
                            } else {
                              setValue("dial_code", "91");
                              field.onChange(value);
                            }
                          }}
                        />

                        {errors.contact_no ? (
                          <span className={classes.helperText}>
                            {errors.contact_no?.message}
                          </span>
                        ) : errors.dial_code ? (
                          <span className={classes.helperText}>
                            {errors.dial_code?.message}
                          </span>
                        ) : (
                          <span>
                            <br />
                          </span>
                        )}
                      </>
                    )}
                  />
                </Box>
                <Box className={classes.centered_div}>
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            </FormControl>
            <ToastContainer position="bottom-right" theme="colored" />
          </form>
        </Box>
      </Box>
      <Box className={classes.btnContainer}>
        <div className="glogin">
          <Google />
        </div>
        <div>
          <GithubLoginComponent />
        </div>
      </Box>
    </React.Fragment>
  );
};

export default SignUpComponent;
