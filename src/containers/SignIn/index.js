import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { TextField, Box, FormControl, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  userNameValidation,
  passwordValidation,
} from "../../schema/validation_schema";
import HeaderComponent from "../../components/StaticHeader";
import axios from "axios";
import CreateFileComponent from "../../components/CreateFile";
import ParentComponent from "../../components/ContextAPI/parent";

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
  const [uName, setUname] = useState(null);
  const [pwd, setPwd] = useState(null);

  const [datas, setData] = useState(null);
  const [error, setError] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        username: userNameValidation,
        password: passwordValidation,
      })
    ),
    mode: "all",
  });

  // fetch data from API

  useEffect(() => {
    axios(process.env.REACT_APP_API_URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error while fetchig data :: ", err);
        setError(err);
      });
  }, []);

  console.log("experiment : ->", datas)

  const onSubmit = async (data) => {
    try {
      setUname(data.username);
      setPwd(data.password);
    } catch (err) {
      console.log("error _>>>>", err);
    }
  };

  console.log("login username _>>>>", uName, "login pwd _>>>>", pwd);

  return (
    <React.Fragment>
      <HeaderComponent />
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
                <CreateFileComponent />

                <Box className={classes.centered_div}>
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Box>
      {/* <ChildComponent /> */}
      <ParentComponent />
    </React.Fragment>
  );
};

export default SigninComponent;
