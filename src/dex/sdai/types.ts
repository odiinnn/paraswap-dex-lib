import { Address } from '../../types';

export type SDaiData = { exchange: Address };

export type SDaiParams = {
  sdaiAddress: Address;
  daiAddress: Address;
  potAddress: Address;
};

export enum SDaiFunctions {
  deposit = 'deposit',
  redeem = 'redeem',
  withdraw = 'withdraw',
  mint = 'mint',
}

export type SDaiPoolState = {
  rho: string;
  chi: string;
  dsr: string;
  live: boolean;
};
