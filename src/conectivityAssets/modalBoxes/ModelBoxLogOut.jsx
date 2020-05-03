import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useTheme } from '@emotion/react';

import { useWeb3React } from "@web3-react/core";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  logoutModelBoxOpenKaro,
  setlogoutModelBoxOpenKaro,
}) {
  const { deactivate } = useWeb3React();

  const handleLogout = () => {
    deactivate();
    setlogoutModelBoxOpenKaro(false);
    localStorage.removeItem("wallet");
  };
  const theme = useTheme()
  return (
    <div>
      <Dialog
        open={logoutModelBoxOpenKaro}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleLogout}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          style={{
            background: theme.primary.wb,
            color: theme.primary.bw,
          }}
        >
          {" Please Confirm Your Action"}
        </DialogTitle>
        <DialogContent
          sx={{ background: theme.primary.wb }}
        >
          <DialogContentText
            style={{ color: theme.primary.bw }}
            id="alert-dialog-slide-description"
          >
            Are you sure you want to Logout ?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ background: theme.primary.wb }}>
          <Button
            onClick={() => {
              setlogoutModelBoxOpenKaro(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleLogout}>Logout</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
