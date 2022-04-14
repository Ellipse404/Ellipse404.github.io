import React, { useState } from "react";
import { CKEditor } from "ckeditor4-react";
import TreeViewComponent from "../TreeMap";
import TextToSpeechComponent from "../Text2Speech";
import { Box } from "@mui/material";
import SpeechToTextComponent from "../Speech2Text";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  converter: {
    width: "90%",
    display: "flex",
    height: "76px",
    justifyContent: "space-between",
    paddingLeft: "22px",
    paddingRight: "22px",
    alignItems: "center",
  }
}))

const ExtraComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState("hi");
  return (
    <React.Fragment>
      <CKEditor
         value={value}
        onChange={(e, editor) => {
          const data = e.editor.getData();
          setValue(data);
        }}
      />
      <Box className={classes.converter} >
        <TextToSpeechComponent word={value} btnText="Read this out" />
      </Box>
      <Box className={classes.converter}>
        <SpeechToTextComponent />
      </Box>
      <TreeViewComponent />
    </React.Fragment>
  );
};

export default ExtraComponent;
