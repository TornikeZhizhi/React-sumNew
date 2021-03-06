import React from "react";
// import Snackbar from "@material-ui/core/Snackbar";
import IconButton from '@mui/material/IconButton';
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from '@mui/material/Snackbar';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function AlertMassage({ message }) {
  const [open, setOpen] = React.useState(true);
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        variant="warning"
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={message}
        action={[
          <IconButton key="close" onClick={handleClose} style={{background:"red"}}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
}
