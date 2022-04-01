import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { TextField, Box, FormControl, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  userNameValidation,
  emailValidation,
  contactNoValidation,
  passwordValidation,
  confirmPasswordValidation,
} from "../../schema/validation_schema";

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
    height: "260px !important",
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
}));

const SigninComponent = () => {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        email: emailValidation,
        password: passwordValidation,
      })
    ),
    mode: "all",
  });
  const onSubmit = async (data) => {
    try {
      console.log("login data _>>>>", data);
    } catch (err) {
      console.log("error _>>>>", err);
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

                <Box className={classes.centered_div}>
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default SigninComponent;
