require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider({
  privateKeys: [process.env.PRIVATE_KEY],
  providerOrUrl: process.env.RPC_URL,
});

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    console.log("⚙️  Starting deployment...");

    const accounts = await web3.eth.getAccounts();
    console.log("🔑 Using account:", accounts[0]);

    const result = await new web3.eth.Contract(
      JSON.parse(compiledFactory.interface)
    )
      .deploy({ data: '0x' + compiledFactory.bytecode })
      .send({ from: accounts[0], gas: "3000000" });

    console.log("✅ Contract deployed to:", result.options.address);
  } catch (err) {
    console.error("❌ Deployment failed:", err);
  } finally {
    provider.engine.stop();
  }
};

deploy();
