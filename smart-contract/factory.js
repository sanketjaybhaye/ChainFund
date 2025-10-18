import web3 from "../web3"; // or "./web3" if it's in the same folder
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x09634A5929B618C59Dc81505dFA79CB84b9181F2" // NOTE: redeploy after contract changes and update this address
);

export default instance;
