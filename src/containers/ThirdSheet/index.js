import React from "react";
import DatePickerComponent from "../../components/DatePicker";
import MyUploader from "../../components/ImageUploading";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeaderComponent from "../../components/StaticHeader";
import ImageSearchComponent from "../../components/ImageSearch";

const useStyles = makeStyles((theme) => ({
  sec1: {
    display: "flex",
    width: "100% !important",
    justifyContent: "center !important",
    height: "40vh",
    backgroundColor: "whitesmoke",
    borderBottom: "1px dashed black",
  },

  sec2: {
    height: "60vh",
    overflowY: "auto",
    backgroundColor: "white",
  },

  center: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "start",
  },
}));

const ThirdSheetComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HeaderComponent />
      <Grid container>
        <Grid
          xs={6}
          lg={6}
          md={6}
          sm={6}
          xl={6}
          sx={{ border: "1px dashed black" }}
        >
          <Box className={classes.sec1}>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <DatePickerComponent />
            </Box>
          </Box>
          <Box className={classes.sec2}>
            <Box sx={{ height: "60vh" }}>
              <MyUploader />
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} lg={6} md={6} sm={6} xl={6}>
          <Box className={classes.center}>
            <ImageSearchComponent />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ThirdSheetComponent;
