import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Stack, Typography, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { DummyProfile } from "../Icons"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "lightblue",
  border: "none",
  borderRadius: "14px",
  boxShadow: 24,
  height: "180px",
  p: 4,
  alignItems: "center",
  textAlign: "center",
};

const useStyles = makeStyles((theme) => ({
  acceptBtn: {
    width: "auto",
    height: "auto",
    backgroundColor: "#81c784",
  },

  profileBox: {
    width:"100%",
  }
}));

export default function ModalComponent({ onClick, ...props }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const profileImage = localStorage.getItem("profileImage");
 const pc = (
  <img
    style={{ height: "50px ", borderRadius: "6px" }}
    src={profileImage}
  />
)
  return (
    <div>
      <LogoutIcon
        sx={{ cursor: "pointer", color: "whitesmoke" }}
        onClick={handleOpen}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box >
            <Box className={classes.profileBox}>
             { profileImage ? pc : <DummyProfile />}
            </Box>
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Hey,{localStorage.getItem("username")}  
          </Typography>
          <Typography>
          Are you sure to Logout ?
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ marginTop: "20px" }}
          >
            <Button onClick={handleClose} color="error" variant="contained">
              No
            </Button>
            <Button color="success" variant="contained" onClick={onClick}>
              Yes
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
