import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  downloadBtn: {
    width: "auto",
    height: "36px",
    backgroundColor: "#009999 !important",
  },

  typo1: {
    color: "whitesmoke",
    fontSize: "18px",
  },
}));

const CreateFileComponent = () => {
  const [data, setData] = useState(null);
  const classes = useStyles();

  // fetch data from API & state store

  useEffect(() => {
    axios(process.env.REACT_APP_API_URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error getting the data : ", error);
      });
  }, []);

  // create file
  const downloadTxtFile = () => {
    const createFile = document.createElement("a");
    const file = new Blob([JSON.stringify(data)], { type: "text/plain" });
    createFile.href = URL.createObjectURL(file);
    createFile.download = "dataFile.txt";
    document.body.appendChild(createFile);
    createFile.click();
  };

  return (
    <React.Fragment>
      {console.log("API DATA => ", typeof JSON.stringify(data))}
      <Box sx={{ textAlign: "right" }}>
        <Button className={classes.downloadBtn} onClick={downloadTxtFile}>
          <Typography className={classes.typo1}>
            <pre>Download Data</pre>
          </Typography>
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default CreateFileComponent;
