import React from "react";
import DatePickerComponent from "../../components/DatePicker";
import MyUploader from "../../components/ImageUploading";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeaderComponent from "../../components/StaticHeader";
import ResponsiveAppBar from "../../components/StaticHeader";

const useStyles = makeStyles((theme) => ({
  sec1: {
    display: "flex",
    width: "100% !important",
    justifyContent: "center !important",
    height: "39vh",
    backgroundColor: "whitesmoke",
    border: "1px dashed black",
  },

  sec2: {
    height: "58vh",
    overflowY: "auto",
    backgroundColor: "white",
    border: "1px dashed black",
  },
}));

const ThirdSheetComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HeaderComponent />
      <Grid container>
        <Grid xs={6} lg={6} md={6} sm={6} xl={6}>
          <Box className={classes.sec1}>
            <Box>
              <DatePickerComponent />
            </Box>
          </Box>
          <Box className={classes.sec2}>
            <Box sx={{ height: "60vh" }}>
              <MyUploader />
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} lg={6} md={6} sm={6} xl={6}></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ThirdSheetComponent;
