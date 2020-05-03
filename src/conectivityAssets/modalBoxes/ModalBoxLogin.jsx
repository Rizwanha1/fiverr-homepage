import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Grid, Box, useMediaQuery } from "@mui/material";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from "@web3-react/core";
import { injected, bsc } from "../connectors/Connectors";
import NetworkChange from "./NetWorkSwitch";
import { useTheme } from '@emotion/react';
import Web3 from "web3";
const web3 = new Web3(
  Web3.givenProvider
    ? Web3.givenProvider
    : "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
const POLLING_INTERVAL = 12000;
export const walletconnect = new WalletConnectConnector({
  rpc: {
    56: "https://bsc-dataseed.binance.org/",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  supportedChainIds: [1, 56, 97],
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  //   key: null,
  //   qrcodeModal: QRCodeModal,
  pollingInterval: POLLING_INTERVAL,
  infuraId: "c2e6cb823be147da987a69d4ffdc2e37",
});
export default function WalletConnect({
  loginModelBoxOpenKaro,
  setloginModelBoxOpenKaro,
  isDarkMode
}) {
  const matches = useMediaQuery("(max-width:600px)");
  const { activate, active, account, chainId } = useWeb3React();
  const [networkSwitch, setnetworkSwitch] = useState(false);
  var c;
  matches && window.web3 ? (c = injected) : (c = walletconnect);
  const theme = useTheme();
  // matches && window.web3 ? (c = injected) : (c = injected);
  let data = [
    {
      name: "Metamask",
      dis: "Connect to your Metamask Wallet",
      img: "./assets/metamask.png",
      wallet: "meta",
      fun: injected,
    },
    {
      name: "walletConnect",
      dis: "Scan withWalletConnect to connect",
      img: "./assets/walletconnec.svg",
      wallet: "c",
      fun: c,
    },
    {
      name: "TokenPocket",
      dis: "Connect to your  Wallet",
      img: "./assets/tokenpo.png",
      fun: c,
      wallet: "c",
    },
    {
      name: "TrustWallet",
      dis: "Connect to your  Wallet",
      img: "./assets/trust.png",
      fun: c,
      wallet: "c",
    },
    {
      name: "SafePal Wallet",
      dis: "Connect to your  Wallet",
      img: "./assets/safepal.png",
      fun: c,
      wallet: "c",
    },
  ];

  //   const handleClose = () => {
  //     setopen(false);
  //   };
  //   const handleClickOpen = () => {
  //     setopen(true);
  //   };
  //   React.useMemo(() => {
  //     if (chainId) {
  //       console.log(chainId, "chainId");
  //     }
  //   }, [chainId]);
  //   console.log(chainId, "chainId");
  const chaincheck = async () => {
    try {
      console.log("calleddd");
      const chainid = await web3.eth.getChainId();
      const acc = await web3.eth.getAccounts();
      if (chainid !== 56) {
        setnetworkSwitch(true);
      }
    } catch (e) {
      console.error(e);
    }
  }
  React.useEffect(() => {
    const storage = localStorage.getItem("wallet");
    if (storage == "meta") {
      activate(injected);
    } else if (storage == "c") {
      activate(c);
    }
  }, []);
  return (
    <div>
      <NetworkChange open={networkSwitch} setOpen={setnetworkSwitch} />
      <Dialog
        onClose={() => {
          setloginModelBoxOpenKaro(false);
        }}
        open={loginModelBoxOpenKaro}
      >
        <DialogContent
          style={{
            background: theme.primary.wb,
          }}
        >
          {data.map((item, i) => (
            <Grid
              key={`${item}+${i}`}
              style={{
                width: "100%",
                height: "20%",
                textAlign: "center",
                cursor: "pointer",
                borderRadius: 20,
              }}
            >
              <Box
                className="glow-on-hover"
                onClick={async () => {
                  activate(item.fun);
                  localStorage.setItem("wallet", item.wallet);
                  setloginModelBoxOpenKaro(false);
                  chaincheck();
                }}
                display="flex"
                alignItems="center"
                m={1}
                borderRadius={5}
                p={1}
              >
                <Box width="200px" sx={{ color: theme.primary.bw }}>
                  <b>{item.name}</b>
                </Box>
                <Box>
                  <img
                    src={item.img}
                    alt="Metamask"
                    style={{ width: 40, height: 40 }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}
