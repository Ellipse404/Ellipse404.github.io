import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import React from "react";
import ChildHeaderComponent from "../ChildHeader";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

const MyUploader = () => {
  const getUploadParams = ({ meta }) => {
    return { url: process.env.REACT_APP_IAPPS_URL };
  };
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };
  return (
    <React.Fragment>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <ChildHeaderComponent header="File Uploader" />
      </Box>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*,.pdf"
      />
    </React.Fragment>
  );
};
export default MyUploader;
