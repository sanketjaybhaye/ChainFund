# ChainFund

[![Author](https://img.shields.io/badge/Author-SanketJaybhaye-blue)](https://github.com/)
[![Version](https://img.shields.io/badge/Version-1.0-green)]()
[![License](https://img.shields.io/badge/License-Apache-yellow)]()

**ChainFund** — Crowdfunding Platform Powered by Ethereum Blockchain

## Tech Stack

* **Frontend:** Next.js, Chakra UI
* **Smart Contracts:** Solidity
* **Blockchain Interaction:** Web3.js

## Running the Application Locally

1. Fork the project.
2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Prerequisites to Create Campaigns and Contribute

1. Install **MetaMask** Chrome extension and create an account.
2. Fund your Ethereum wallet for testing:

   * Request Ether via social media or testnets: [Sepolia Explorer](https://sepolia.basescan.org/)
   * Get 0.01 test Ether: [Google Cloud Web3 Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)

## Deploying Your Own Smart Contract

1. Create an account on [Infura](https://infura.io) or [Alchemy](https://dashboard.alchemy.com/).
2. Create a `.env` file in the `Ethereum` directory and add:

```env
mnemonic='Your mnemonic code'
link='Your Infura/Alchemy endpoint URL'
```

3. Modify the Solidity contract as needed.
4. Compile the contract:

```bash
node compile.js
```

5. Deploy the contract from the `smart-contract` directory:

```bash
node deploy.js
```

6. Copy the deployed contract address and replace it in `factory.js`.
7. Replace your Infura/Alchemy endpoint link in `web3.js`.

## Notes

* Ensure you are on the **Sepolia test network** while testing.
* For mainnet deployment, change the network configurations accordingly.
