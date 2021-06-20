import * as Mars from "ethereum-mars";

const ERC20__JSON = require("./contracts/ERC20.json");
const ExampleAirDrop__JSON = require("./contracts/ExampleAirDrop.json");
const ExampleDummyExchange__JSON = require("./contracts/ExampleDummyExchange.json");
const ExampleFlashCash__JSON = require("./contracts/ExampleFlashCash.json");
const ExampleFlashLoan__JSON = require("./contracts/ExampleFlashLoan.json");
const Math__JSON = require("./contracts/Math.json");
const Multicall__JSON = require("./contracts/Multicall.json");
const SafeMath__JSON = require("./contracts/SafeMath.json");
const SfpyERC20__JSON = require("./contracts/SfpyERC20.json");
const SfpyFactory__JSON = require("./contracts/SfpyFactory.json");
const SfpyLibrary__JSON = require("./contracts/SfpyLibrary.json");
const SfpyPool__JSON = require("./contracts/SfpyPool.json");
const SfpyRouter__JSON = require("./contracts/SfpyRouter.json");
const TransferHelper__JSON = require("./contracts/TransferHelper.json");
const WETH9__JSON = require("./contracts/WETH9.json");

export const ERC20 = Mars.createArtifact<{
  new(_totalSupply: Mars.NumberLike): void;
  DOMAIN_SEPARATOR(): Mars.FutureBytes;
  PERMIT_TYPEHASH(): Mars.FutureBytes;
  allowance(owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber;
  approve(spender: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction;
  balanceOf(account: Mars.AddressLike): Mars.FutureNumber;
  decimals(): Mars.FutureNumber;
  name(): Mars.Future<string>;
  nonces(owner: Mars.AddressLike): Mars.FutureNumber;
  permit(owner: Mars.AddressLike, spender: Mars.AddressLike, value: Mars.NumberLike, deadline: Mars.NumberLike, v: Mars.NumberLike, r: Mars.BytesLike, s: Mars.BytesLike): Mars.Transaction;
  symbol(): Mars.Future<string>;
  totalSupply(): Mars.FutureNumber;
  transfer(to: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction;
  transferFrom(from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction;
}>("ERC20", ERC20__JSON);

export const ExampleAirDrop = Mars.createArtifact<{
  new(_token: Mars.AddressLike): void;
  token(): Mars.Future<string>;
  transfer(amount: Mars.NumberLike, to: Mars.AddressLike): Mars.Transaction;
}>("ExampleAirDrop", ExampleAirDrop__JSON);

export const ExampleDummyExchange = Mars.createArtifact<{
  new(_token: Mars.AddressLike): void;
  doubleUp(amount: Mars.NumberLike): Mars.Transaction;
  token(): Mars.Future<string>;
}>("ExampleDummyExchange", ExampleDummyExchange__JSON);

export const ExampleFlashCash = Mars.createArtifact<{
  new(_router: Mars.AddressLike, _airdrop: Mars.AddressLike): void;
  afterPay(sender: Mars.AddressLike, token: Mars.AddressLike, amount: Mars.NumberLike, data: Mars.BytesLike): Mars.Transaction;
}>("ExampleFlashCash", ExampleFlashCash__JSON);

export const ExampleFlashLoan = Mars.createArtifact<{
  new(_factory: Mars.AddressLike, _exchange: Mars.AddressLike): void;
  borrow(sender: Mars.AddressLike, amount: Mars.NumberLike, data: Mars.BytesLike): Mars.Transaction;
}>("ExampleFlashLoan", ExampleFlashLoan__JSON);

export const Math = Mars.createArtifact<{
  new(): void;
}>("Math", Math__JSON);

export const Multicall = Mars.createArtifact<{
  new(): void;
  aggregate(calls: Mars.MaybeFuture<Mars.MaybeFuture<{target: Mars.AddressLike, callData: Mars.BytesLike}>[]>): Mars.Transaction;
  getBlockHash(blockNumber: Mars.NumberLike): Mars.FutureBytes;
  getCurrentBlockCoinbase(): Mars.Future<string>;
  getCurrentBlockDifficulty(): Mars.FutureNumber;
  getCurrentBlockGasLimit(): Mars.FutureNumber;
  getCurrentBlockTimestamp(): Mars.FutureNumber;
  getEthBalance(addr: Mars.AddressLike): Mars.FutureNumber;
  getLastBlockHash(): Mars.FutureBytes;
}>("Multicall", Multicall__JSON);

export const SafeMath = Mars.createArtifact<{
  new(): void;
}>("SafeMath", SafeMath__JSON);

export const SfpyERC20 = Mars.createArtifact<{
  new(): void;
  DOMAIN_SEPARATOR(): Mars.FutureBytes;
  PERMIT_TYPEHASH(): Mars.FutureBytes;
  allowance(owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber;
  approve(spender: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction;
  balanceOf(account: Mars.AddressLike): Mars.FutureNumber;
  decimals(): Mars.FutureNumber;
  name(): Mars.Future<string>;
  nonces(owner: Mars.AddressLike): Mars.FutureNumber;
  permit(owner: Mars.AddressLike, spender: Mars.AddressLike, value: Mars.NumberLike, deadline: Mars.NumberLike, v: Mars.NumberLike, r: Mars.BytesLike, s: Mars.BytesLike): Mars.Transaction;
  symbol(): Mars.Future<string>;
  totalSupply(): Mars.FutureNumber;
  transfer(to: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction;
  transferFrom(from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction;
}>("SfpyERC20", SfpyERC20__JSON);

export const SfpyFactory = Mars.createArtifact<{
  new(o: Mars.AddressLike): void;
  createPool(token: Mars.AddressLike): Mars.Transaction;
  owner(): Mars.Future<string>;
  pool(token: Mars.AddressLike): Mars.Future<string>;
  pools(): Mars.FutureNumber;
  setOwner(o: Mars.AddressLike): Mars.Transaction;
}>("SfpyFactory", SfpyFactory__JSON);

export const SfpyLibrary = Mars.createArtifact<{
  new(): void;
}>("SfpyLibrary", SfpyLibrary__JSON);

export const SfpyPool = Mars.createArtifact<{
  new(): void;
  DOMAIN_SEPARATOR(): Mars.FutureBytes;
  PERMIT_TYPEHASH(): Mars.FutureBytes;
  allowance(owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber;
  approve(spender: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction;
  balanceOf(account: Mars.AddressLike): Mars.FutureNumber;
  borrow(amountOut: Mars.NumberLike, to: Mars.AddressLike, data: Mars.BytesLike): Mars.Transaction;
  burn(to: Mars.AddressLike): Mars.Transaction;
  decimals(): Mars.FutureNumber;
  factory(): Mars.Future<string>;
  getReserves(): Mars.Future<[Mars.FutureNumber, Mars.FutureNumber]>;
  initialize(t: Mars.AddressLike): Mars.Transaction;
  liquidityToBurn(amount: Mars.NumberLike): Mars.FutureNumber;
  mint(to: Mars.AddressLike): Mars.Transaction;
  name(): Mars.Future<string>;
  nonces(owner: Mars.AddressLike): Mars.FutureNumber;
  permit(owner: Mars.AddressLike, spender: Mars.AddressLike, value: Mars.NumberLike, deadline: Mars.NumberLike, v: Mars.NumberLike, r: Mars.BytesLike, s: Mars.BytesLike): Mars.Transaction;
  symbol(): Mars.Future<string>;
  token(): Mars.Future<string>;
  totalSupply(): Mars.FutureNumber;
  transfer(to: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction;
  transferFrom(from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction;
}>("SfpyPool", SfpyPool__JSON);

export const SfpyRouter = Mars.createArtifact<{
  new(_f: Mars.AddressLike, _weth: Mars.AddressLike): void;
  WETH(): Mars.Future<string>;
  factory(): Mars.Future<string>;
  flash(token: Mars.AddressLike, tokenAmount: Mars.NumberLike, to: Mars.AddressLike, callback: Mars.AddressLike, deadline: Mars.NumberLike, data: Mars.BytesLike): Mars.Transaction;
  pay(token: Mars.AddressLike, tokenAmount: Mars.NumberLike, rate: Mars.NumberLike, request: Mars.BytesLike, to: Mars.AddressLike, deadline: Mars.NumberLike): Mars.Transaction;
  payETH(request: Mars.BytesLike, to: Mars.AddressLike, rate: Mars.NumberLike, deadline: Mars.NumberLike): Mars.Transaction;
  refund(token: Mars.AddressLike, tokenAmount: Mars.NumberLike, payment: Mars.BytesLike, to: Mars.AddressLike, deadline: Mars.NumberLike): Mars.Transaction;
  refundETH(payment: Mars.BytesLike, tokenAmount: Mars.NumberLike, to: Mars.AddressLike, deadline: Mars.NumberLike): Mars.Transaction;
  refundETHWithPermit(payment: Mars.BytesLike, tokenAmount: Mars.NumberLike, to: Mars.AddressLike, deadline: Mars.NumberLike, approveMax: Mars.BooleanLike, v: Mars.NumberLike, r: Mars.BytesLike, s: Mars.BytesLike): Mars.Transaction;
  refundWithPermit(token: Mars.AddressLike, tokenAmount: Mars.NumberLike, payment: Mars.BytesLike, to: Mars.AddressLike, deadline: Mars.NumberLike, approveMax: Mars.BooleanLike, v: Mars.NumberLike, r: Mars.BytesLike, s: Mars.BytesLike): Mars.Transaction;
  withdraw(token: Mars.AddressLike, liquidity: Mars.NumberLike, amountMin: Mars.NumberLike, to: Mars.AddressLike, deadline: Mars.NumberLike): Mars.Transaction;
  withdrawETH(liquidity: Mars.NumberLike, amountMin: Mars.NumberLike, to: Mars.AddressLike, deadline: Mars.NumberLike): Mars.Transaction;
  withdrawETHWithPermit(liquidity: Mars.NumberLike, amountMin: Mars.NumberLike, to: Mars.AddressLike, deadline: Mars.NumberLike, approveMax: Mars.BooleanLike, v: Mars.NumberLike, r: Mars.BytesLike, s: Mars.BytesLike): Mars.Transaction;
  withdrawWithPermit(token: Mars.AddressLike, liquidity: Mars.NumberLike, amountMin: Mars.NumberLike, to: Mars.AddressLike, deadline: Mars.NumberLike, approveMax: Mars.BooleanLike, v: Mars.NumberLike, r: Mars.BytesLike, s: Mars.BytesLike): Mars.Transaction;
}>("SfpyRouter", SfpyRouter__JSON);

export const TransferHelper = Mars.createArtifact<{
  new(): void;
}>("TransferHelper", TransferHelper__JSON);

export const WETH9 = Mars.createArtifact<{
  new(): void;
  allowance(_: Mars.AddressLike, __: Mars.AddressLike): Mars.FutureNumber;
  approve(guy: Mars.AddressLike, wad: Mars.NumberLike): Mars.Transaction;
  balanceOf(_: Mars.AddressLike): Mars.FutureNumber;
  decimals(): Mars.FutureNumber;
  deposit(): Mars.Transaction;
  name(): Mars.Future<string>;
  symbol(): Mars.Future<string>;
  totalSupply(): Mars.FutureNumber;
  transfer(dst: Mars.AddressLike, wad: Mars.NumberLike): Mars.Transaction;
  transferFrom(src: Mars.AddressLike, dst: Mars.AddressLike, wad: Mars.NumberLike): Mars.Transaction;
  withdraw(wad: Mars.NumberLike): Mars.Transaction;
}>("WETH9", WETH9__JSON);
