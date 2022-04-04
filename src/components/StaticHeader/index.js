import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    width: "100%",
    background: "#1976d2",
    height: "50px",
  },

  child1: {
    display: "flex",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },

  child2: {
    display: "flex",
    width: "180px !important",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    color: "white",
  },
}));

const HeaderComponent = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    navigate("/signup")
    localStorage.clear()
  }
  return (
    <React.Fragment>
      <Box className={classes.parent}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "end",
            paddingRight: "12px",
          }}
        >
          <Box className={classes.child2}>
            <Box>
              {(
                <img
                  style={{ height: "38px ", borderRadius: "6px" }}
                  src={localStorage.getItem("profileImage")}
                />
              ) || <AccountCircle />}
            </Box>
            <Typography className={classes.text}>
              {localStorage.getItem("username")}
            </Typography>
            <LogoutIcon onClick={() => logoutHandler()}/>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default HeaderComponent;
