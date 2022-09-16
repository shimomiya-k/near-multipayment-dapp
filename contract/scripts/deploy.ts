require("dotenv").config();
const hre = require("hardhat");

const provider = hre.ethers.provider;
const deployerWallet = new hre.ethers.Wallet(
  process.env.AURORA_PRIVATE_KEY,
  provider
);

async function main() {
  console.log("Deploying contracts with the account:", deployerWallet.address);

  console.log(
    "Account balance:",
    (await deployerWallet.getBalance()).toString()
  );

  const [
    swapFactory,
    daiToken,
    ethToken,
    aoaToken,
    shibToken,
    solToken,
    usdtToken,
    uniToken,
    maticToken,
  ] = await Promise.all([
    hre.ethers.getContractFactory("SwapContract"),
    hre.ethers.getContractFactory("DaiToken"),
    hre.ethers.getContractFactory("EthToken"),
    hre.ethers.getContractFactory("AuroraToken"),
    hre.ethers.getContractFactory("ShibainuToken"),
    hre.ethers.getContractFactory("SolanaToken"),
    hre.ethers.getContractFactory("TetherToken"),
    hre.ethers.getContractFactory("UniswapToken"),
    hre.ethers.getContractFactory("PolygonToken"),
  ]);

  const SwapContract = await swapFactory.connect(deployerWallet).deploy();
  await SwapContract.deployed();
  console.log("Swap Contract is deployed to:", SwapContract.address);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const [deployer] = await hre.ethers.getSigners();
  console.log(`deployer address is ${deployer.address}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const DaiToken = await daiToken.deploy(SwapContract.address);
  await DaiToken.deployed();
  console.log("DaiToken is deployed to:", DaiToken.address);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const EthToken = await ethToken.deploy(SwapContract.address);
  await EthToken.deployed();
  console.log("EthToken is deployed to:", EthToken.address);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const AoaToken = await aoaToken.deploy(SwapContract.address);
  await AoaToken.deployed();
  console.log("AoaToken is deployed to:", AoaToken.address);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const ShibToken = await shibToken.deploy(SwapContract.address);
  await ShibToken.deployed();
  console.log("ShibToken is deployed to:", ShibToken.address);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const SolToken = await solToken.deploy(SwapContract.address);
  await SolToken.deployed();
  console.log("SolToken is deployed to:", SolToken.address);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const UsdtToken = await usdtToken.deploy(SwapContract.address);
  await UsdtToken.deployed();
  console.log("UsdtToken is deployed to:", UsdtToken.address);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const UniToken = await uniToken.deploy(SwapContract.address);
  await UniToken.deployed();
  console.log("UniToken is deployed to:", UniToken.address);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const MaticToken = await maticToken.deploy(SwapContract.address);
  await MaticToken.deployed();
  console.log("MaticToken is deployed to:", MaticToken.address);
}

main().catch((error) => {
  console.error(error);
  console.error(error.message);
  console.error(error.code);
  console.error(error.data);
  process.exitCode = 1;
});
