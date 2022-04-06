import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, Stack, Typography, Modal} from '@mui/material';
import { makeStyles } from "@mui/styles";
import { green } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'lightblue',
  border: 'none',
  borderRadius: '14px',
  boxShadow: 24,
  height:"160px",
  p: 4,
  alignItems: "center",  
  textAlign: 'center'
};

const useStyles = makeStyles((theme) => ({
  acceptBtn: {
    width:'auto',
    height:'auto',
    backgroundColor: "#81c784"
  },

}))

export default function ModalComponent({onClick}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <LogoutIcon  sx={{cursor: "pointer"}} onClick={ handleOpen}/>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure to Logout ?
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{marginTop:"80px"}}>
          <Button onClick={handleClose} color="error" variant="contained" >
            No
          </Button>
          <Button  color="success" variant="contained" onClick={onClick}>
            Yes
          </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
