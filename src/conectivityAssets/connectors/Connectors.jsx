import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from "@binance-chain/bsc-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
export const injected = new InjectedConnector({
  supportedChainIds: [56],
});
export const bsc = new BscConnector({
  supportedChainIds: [56, 97],
});
export const walletconnect = new WalletConnectConnector({
  rpc: {
    56: "https://bsc-dataseed.binance.org/",
  },
  supportedChainIds: [56],
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000,
  chainId: 56,
});
