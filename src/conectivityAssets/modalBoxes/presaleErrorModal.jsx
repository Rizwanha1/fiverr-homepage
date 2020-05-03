import React, { useEffect } from "react";
import { Dialog, DialogContent, Typography, Box, Slide } from "@mui/material/";
import { useWeb3React } from "@web3-react/core";
import { Button } from "@material-ui/core";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ErrorMessage({ open, setOpen }) {
  const { deactivate } = useWeb3React();
  const handleClose = () => {
    setOpen(false);
  };

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
              background: `-webkit-linear-gradient(left, #2C7EF8, #BD4BC8)`,
            }}
          >
            <Box component="h3" color="#000">
              <Box component="span" color="red" fontSize="30px">
                Sorry!
              </Box>{" "}
              You don't have 1000 JED tokens in your wallet{" "}
            </Box>
            <Box align="center" display="flex" justifyContent="center">
              <Button
                component="a"
                href="https://pancakeswap.finance/swap?outputCurrency=0x058a7af19bdb63411d0a84e79e3312610d7fa90c"
                target="_blank"
                style={{
                  background:
                    "linear-gradient(180deg, #E54D75 0%, #F72E63 100%)",
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
                onClick={handleClose}
              >
                Buy on Pancake
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
        {/* </Slide> */}
      </div>
    </div>
  );
}

export default ErrorMessage;
