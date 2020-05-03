import React from "react";
import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { presaleAddress, tokenAddress } from "../utils/Environment.jsx";
import presaleAbi from "../utils/PresaleABI.json";
const web3 = new Web3(
  "https://bsc-dataseed.binance.org/"
);

function useContract(address, ABI) {
  const { active, error, library } = useWeb3React();
  return React.useMemo(() => {
    if (active && !error && library) {
      const signer = library.getSigner();
      return new Contract(address, ABI, signer);
    } else {
      return "error not signed";
    }
  }, [address, ABI, active, error, library]);
}


// export function usePresaleContract() {
//   return useContract(presaleAddress, presaleAbi);
// }

// export const usePresaleContractSigned = () =>
//   useContract(presaleAddress, PresaleABI);
// export const useTokenContractSigned = () => useContract(tokenAddress, TokenABI);

export function usePresaleContract() {
  const presaleContract = new web3.eth.Contract(presaleAbi, presaleAddress);
  return presaleContract;
}
// export function useTokenContractNotSigned() {
//   const presaleContract = new web3.eth.Contract(TokenABI, tokenAddress);
//   return presaleContract;
// }
