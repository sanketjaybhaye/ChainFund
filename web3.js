import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // MetaMask in browser
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // Server-side fallback
  const provider = new Web3.providers.HttpProvider(
    "https://base-sepolia.g.alchemy.com/v2/RuoZfWrBZA6yXOF_COmDk"
  );
  web3 = new Web3(provider);
}

export default web3;
