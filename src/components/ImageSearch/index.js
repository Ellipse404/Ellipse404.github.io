import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import ChildHeaderComponent from "../ChildHeader";

const useStyles = makeStyles((theme) => ({
  parent: {
    width: "100%",
    textAlign: "center",
  },

  header: {
    background: "limegreen",
    padding: "12px",
    marginBottom: "16px",
  },

  btnClass: {
    background: "black !important",
  },

  btnText: {
    color: "white !important",
  },

  stackClass: {
    display: "flex",
    // width:'100%',
    justifyContent: "space-between",
    padding: "12px",
  },
}));

const ImageSearchComponent = () => {
  const classes = useStyles();
  const [query, setQuery] = useState();
  const [pics, setPics] = useState("");
  const [res, setRes] = useState([]);
  const valueRef = useRef("");

  const handleSubmit = async () => {
    fetchRequest();
    setPics("");
  };

  const fetchRequest = async () => {
    setQuery(valueRef.current.value);
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_API}`
    );
    console.log("endpoint 2 => ", data);
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <React.Fragment>
      <Box className={classes.parent}>
        <ChildHeaderComponent header="Image Search"/>
        <Box>
          <form>
            <Stack direction="row" className={classes.stackClass}>
              <TextField sx={{ width: "80%" }} inputRef={valueRef} />
              <Button
                className={classes.btnClass}
                onClick={() => handleSubmit()}
              >
                <Typography className={classes.btnText}>Search</Typography>
              </Button>
            </Stack>
            {res.map((val) => {
              return (
                <>
                  <img src={val.urls.thumb} alt="image" />
                </>
              );
            })}
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ImageSearchComponent;
