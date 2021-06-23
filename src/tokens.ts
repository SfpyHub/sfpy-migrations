import { AddressLike, contract } from 'ethereum-mars'
import { ERC20, WETH9 } from '../build/artifacts'
import { expandTo18Decimals } from './utils'

export const sfpy = () => contract('SFPY', ERC20, [expandTo18Decimals(10000)])
const weth = () => contract('WETH9', WETH9)

type TokenMap = {
  [name: string]: AddressLike  
}

export const ganache = (): TokenMap => ({
  "sfpy": sfpy(),
  "weth": weth()
})

export const goerli = (): TokenMap => ({
  weth: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"
})

export const ropsten = (): TokenMap => ({
  weth: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  dai: "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
  uni: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
})

export const rinkeby = (): TokenMap => ({
  weth: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  dai: "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735",
  mkr: "0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85",
  uni: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
})

export const kovan = (): TokenMap => ({
  weth: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
  dai: "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa",
  mkr: "0xAaF64BFCC32d0F15873a02163e7E500671a4ffcD",
  uni: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
})

export const mainnet = (): TokenMap => ({
  weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  dai: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  usdc: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  wbtc: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
})