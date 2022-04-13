import React, { useState } from "react";
import { CKEditor } from "ckeditor4-react";
import TreeViewComponent from "../TreeMap";
import TextToSpeechComponent from "../Text2Speech";
import { Box } from "@mui/material";

const ExtraComponent = () => {
  const [value, setValue] = useState("");
  return (
    <React.Fragment>
      <CKEditor
        onChange={(e, editor) => {
          const data = e.editor.getData();
          setValue(data);
        }}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          height: "70px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextToSpeechComponent word={value} btnText="Read this out" />
      </Box>
      <TreeViewComponent />
    </React.Fragment>
  );
};

export default ExtraComponent;
