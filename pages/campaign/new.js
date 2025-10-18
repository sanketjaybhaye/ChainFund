import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputRightAddon,
  InputGroup,
  Alert,
  AlertIcon,
  AlertDescription,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getETHPriceINR, getETHPriceInINR } from "../../lib/getETHPrice";

import factory from "../../smart-contract/factory";
import web3 from "../../smart-contract/web3";

export default function NewCampaign() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange" });

  const router = useRouter();
  const [error, setError] = useState("");
  const [minContriInINR, setMinContriInINR] = useState();
  const [targetInINR, setTargetInINR] = useState();
  const [ETHPrice, setETHPrice] = useState(0);
  const [account, setAccount] = useState("");
  const [deadline, setDeadline] = useState("");

  const blockInvalidChar = (e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };

  const preventInvalidPaste = (e) => {
    const pasted = (e.clipboardData || window.clipboardData).getData("text");
    if (!/^\d*\.?\d*$/.test(pasted)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    getETHPriceINR()
      .then((price) => setETHPrice(price))
      .catch((err) => console.error("ETH Price fetch error:", err));
  }, []);

  useEffect(() => {
    // Check if already connected
    const checkWallet = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (err) {
          console.error("Wallet check failed:", err);
        }
      }
    };
    checkWallet();
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("User denied connection:", err);
      }
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  };

  const ensureBaseSepolia = async () => {
    const chainIdHex = "0x14A34"; // 84532
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainIdHex }],
      });
    } catch (switchError) {
      // 4902 = chain not added
      if (switchError && switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: chainIdHex,
                chainName: "Base Sepolia",
                nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
                rpcUrls: [process.env.NEXT_PUBLIC_RPC_URL].filter(Boolean),
                blockExplorerUrls: ["https://sepolia.basescan.org"],
              },
            ],
          });
        } catch (addError) {
          throw addError;
        }
      } else {
        throw switchError;
      }
    }
  };

  async function onSubmit(data) {
    try {
      const accounts = await web3.eth.getAccounts();
      // Ensure correct network before tx
      if (typeof window !== "undefined" && window.ethereum) {
        await ensureBaseSepolia();
      }
      // Convert HTML datetime-local to unix timestamp (seconds)
      const deadlineSeconds = deadline
        ? Math.floor(new Date(deadline).getTime() / 1000)
        : 0;
      const nowSeconds = Math.floor(Date.now() / 1000);
      if (!deadlineSeconds || deadlineSeconds <= nowSeconds) {
        setError("Please select a future deadline.");
        return;
      }
      await factory.methods
        .createCampaign(
          web3.utils.toWei(data.minimumContribution, "ether"),
          data.campaignName,
          data.description,
          data.imageUrl,
          web3.utils.toWei(data.target, "ether"),
          deadlineSeconds
        )
        .estimateGas({ from: accounts[0] })
        .then(async (estimatedGas) => {
          const gasLimit = Math.floor(Number(estimatedGas) * 1.2);
          await factory.methods
            .createCampaign(
              web3.utils.toWei(data.minimumContribution, "ether"),
              data.campaignName,
              data.description,
              data.imageUrl,
              web3.utils.toWei(data.target, "ether"),
              deadlineSeconds
            )
            .send({ from: accounts[0], gas: String(gasLimit) });
        })
        .catch((estimateErr) => {
          const reason = estimateErr?.data?.message || estimateErr?.message || "Transaction simulation failed";
          setError(reason);
          throw estimateErr;
        });

      router.push("/");
    } catch (err) {
      setError(err.message);
      console.error("Create campaign error:", err);
    }
  }

  return (
    <div>
      <Head>
        <title>New Campaign</title>
        <meta name="description" content="Create New Campaign" />
        <link rel="icon" href="../logo.png" />
      </Head>
      <main>
        <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6}>
          <Text fontSize={"lg"} color={"teal.400"}>
            <ArrowBackIcon mr={2} />
            <NextLink href="/"> Back to Home</NextLink>
          </Text>
          <Stack>
            <Heading fontSize={"4xl"}>Create a New Campaign 📢</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl id="minimumContribution">
                  <FormLabel>Minimum Contribution Amount</FormLabel>
                  <InputGroup>
                    <Input
                      type="number"
                      step="any"
                      min="0"
                      inputMode="decimal"
                      onKeyDown={blockInvalidChar}
                      onPaste={preventInvalidPaste}
                      {...register("minimumContribution", { required: true })}
                      isDisabled={isSubmitting}
                      onChange={(e) =>
                        setMinContriInINR(Math.abs(e.target.value))
                      }
                    />
                    <InputRightAddon children="ETH" />
                  </InputGroup>
                  {minContriInINR && (
                    <FormHelperText>
                      ₹ {getETHPriceInINR(ETHPrice, minContriInINR)}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl id="campaignName">
                  <FormLabel>Campaign Name</FormLabel>
                  <Input
                    {...register("campaignName", { required: true })}
                    isDisabled={isSubmitting}
                  />
                </FormControl>

                <FormControl id="description">
                  <FormLabel>Campaign Description</FormLabel>
                  <Textarea
                    {...register("description", { required: true })}
                    isDisabled={isSubmitting}
                  />
                </FormControl>

                <FormControl id="imageUrl">
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    {...register("imageUrl", { required: true })}
                    isDisabled={isSubmitting}
                    type="url"
                  />
                </FormControl>

                <FormControl id="target">
                  <FormLabel>Target Amount</FormLabel>
                  <InputGroup>
                    <Input
                      type="number"
                      step="any"
                      min="0"
                      inputMode="decimal"
                      onKeyDown={blockInvalidChar}
                      onPaste={preventInvalidPaste}
                      {...register("target", { required: true })}
                      isDisabled={isSubmitting}
                      onChange={(e) => setTargetInINR(Math.abs(e.target.value))}
                    />
                    <InputRightAddon children="ETH" />
                  </InputGroup>
                  {targetInINR && (
                    <FormHelperText>
                      ₹ {getETHPriceInINR(ETHPrice, targetInINR)}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl id="deadline">
                  <FormLabel>Campaign Deadline</FormLabel>
                  <Input
                    type="datetime-local"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    isDisabled={isSubmitting}
                    required
                  />
                  <FormHelperText>
                    After the deadline, the campaign can be finalized.
                  </FormHelperText>
                </FormControl>

                {error && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {(errors.minimumContribution ||
                  errors.name ||
                  errors.description ||
                  errors.imageUrl ||
                  errors.target) && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>
                      All Fields are Required
                    </AlertDescription>
                  </Alert>
                )}

                <Stack spacing={10}>
                  {account ? (
                    <Button
                      bg={"teal.400"}
                      color={"white"}
                      _hover={{ bg: "teal.500" }}
                      isLoading={isSubmitting}
                      type="submit"
                    >
                      Create
                    </Button>
                  ) : (
                    <Stack spacing={3}>
                      <Button
                        color={"white"}
                        bg={"teal.400"}
                        _hover={{ bg: "teal.300" }}
                        onClick={connectWallet}
                      >
                        Connect Wallet
                      </Button>
                      <Alert status="warning">
                        <AlertIcon />
                        <AlertDescription>
                          Please Connect Your Wallet First to Create a Campaign
                        </AlertDescription>
                      </Alert>
                    </Stack>
                  )}
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </main>
    </div>
  );
}
