import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // Running in the browser, use MetaMask
  web3 = new Web3(window.ethereum);
} else {
  // Running on the server, use Alchemy
  const provider = new Web3.providers.HttpProvider(
    process.env.NEXT_PUBLIC_RPC_URL || "https://base-sepolia.g.alchemy.com/v2/RuoZfWrBZA6yXOF_COmDk"
  );
  web3 = new Web3(provider);
}

export default web3;
