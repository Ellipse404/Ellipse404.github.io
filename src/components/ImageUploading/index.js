import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const MyUploader = () => {
  const getUploadParams = ({ meta }) => {
    return { url: "http://localhost:3000/iapps" };
  };
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };
  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*,.pdf"
    />
  );
};
export default MyUploader;

