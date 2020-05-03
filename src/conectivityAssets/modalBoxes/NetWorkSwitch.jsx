import React, { useEffect } from "react";
import { Dialog, DialogContent, Typography, Box, Slide, Button } from "@mui/material/";
import { useWeb3React } from "@web3-react/core";
import { useTheme } from '@emotion/react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NetworkChange({ open, setOpen }) {
  console.log(open);
  console.log(setOpen);
  const { deactivate } = useWeb3React();
  const handleClose = () => {
    setOpen(false);
  };
  const networkHandler = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x38" }],
        // params: [{ chainId: "0x89" }],
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const theme = useTheme();
  return (
    <div>
      <div className="modal__main__container">
        <Dialog
          open={open}
          keepMounted
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent
            className="dialoge__content__section"
            sx={{
              background: theme.primary.wb,
            }}
          >
            <Box component="h3" sx={{ color: theme.primary.bw }}>
              <Box component="span" color="red" fontSize="30px">
                Error!
              </Box>{" "}
              You are on the wrong network, please change to the BSC network and try again.{" "}
            </Box>
            <Box align="center" display="flex" justifyContent="center">
              <Button
                style={{
                  background: "#D3013B",
                  borderRadius: "34px",
                  padding: "15px 20px",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                  lineHeight: "19px",
                  fontWeight: "bolder",
                  textTransform: "uppercase",
                  marginRight: "10px",
                }}
                className="glow-on-hover"
                onClick={networkHandler}
              >
                Switch Network
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
        {/* </Slide> */}
      </div>
    </div>
  );
}

export default NetworkChange;
