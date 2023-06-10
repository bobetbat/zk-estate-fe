import type { Hash } from '../types';
export const CONTRACT_ADDRESS:Hash = '0xE47845dac04A7C91E73B8f09b441785810D40f69';
export const CONTRACT_ADDRESS2:Hash = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export interface TGetNumberOfProperties {
  owner: Hash
}

// getNumberOfProperties function config
export const getNumberOfProperties = ({ owner }: TGetNumberOfProperties) => ({
  address: CONTRACT_ADDRESS2,
  abi: [
    {
      name: 'getNumberOfProperties',
      type: 'function',
      stateMutability: 'nonpayable',
      inputs: [
        {
          internalType: 'uint256',
          name: '_landlord',
          type: 'uint256'
        },
      ],
      outputs: [],
    },
  ],
  args: [owner],
  enabled: Boolean(true),
  functionName: 'getNumberOfProperties',
})


export interface TGetProperties {
  pricePerMonth: BigInt;
  collateral: BigInt;
}

export const addProperty = ({ pricePerMonth, collateral }: TGetProperties) => ({
  address: CONTRACT_ADDRESS2,
  abi: [
    {
      name: 'addProperty',
      type: 'function',
      stateMutability: 'nonpayable',
      inputs: [
        { internalType: 'uint256', name: '_pricePerMonth', type: 'uint256' },
        { internalType: 'uint256', name: '_collateral', type: 'uint256' },
      ],
      outputs: [],
    },
  ],
  args: [pricePerMonth, collateral],
  enabled: Boolean(true),
  functionName: 'addProperty',
})
