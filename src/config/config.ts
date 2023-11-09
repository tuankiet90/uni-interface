//@ts-nocheck
import { UNIVERSAL_ROUTER_ADDRESS } from "@uniswap/universal-router-sdk";
import { PERMIT2_ADDRESS } from '@uniswap/permit2-sdk'
export const WETH_ADDRESS = {
  137: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  42161: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
};

export const ROUTER_ADDRESS = {
  42161: "0xec8b0f7ffe3ae75d7ffab09429e3675bb63503e4",
};

export const PERMIT_ADDRESS =  "0x000000000022D473030F116dDEE9F6B43aC78BA3";

export function GET_ROUTER_ADDRESS(chainId: number){
  if (ROUTER_ADDRESS[chainId] ) {
    return ROUTER_ADDRESS[chainId];
  }
  return UNIVERSAL_ROUTER_ADDRESS(chainId);
}


export function GET_PERMIT2_ADDRESS ( ){

 if (PERMIT_ADDRESS ) {
    return PERMIT_ADDRESS;
  }
  return PERMIT2_ADDRESS;
}