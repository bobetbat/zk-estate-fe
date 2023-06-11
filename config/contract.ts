import type { Hash } from '../types';
export const CONTRACT_ADDRESS_MANTLE: Hash = '0xB74475009BD955CB8Ef3d930999737DF1Edb96a6';

export interface TGetNumberOfProperties {
  owner: Hash
}

export interface TChainContracts {
  name: string;
  estate: Hash,
  rent: Hash;
}

export interface TContracts {
  [id: string]: TChainContracts
}

export const contracts: TContracts = {
  534353: {
    name: 'scrollAlfaTestnet',
    estate: '0xbefC6F3B404F2BF6B4c52E05c55BE15ee3Fe294d',
    rent: '0x'
  },
  420: {
    name: 'OptimismTestnet',
    estate: '0xb00FCA39f7a2332508C5fDe9503C2021DEe524c7',
    rent: '0x'
  },
  5001: {
    name: 'mantleTestnet',
    estate: '0x35aB012bb736e915407877F7489b0651406D825d',
    rent: '0x'
  },
  10200: {
    name: 'chiadoGnosisTestnet',
    estate: '0xFe8Fa89D8D861971F5E9061B3Cb90fcaE270338F',
    rent: '0x'//
  },
}

// getNumberOfProperties function config
export const getNumberOfProperties = ({ owner }: TGetNumberOfProperties) => ({
  address: CONTRACT_ADDRESS_MANTLE,
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
  address: CONTRACT_ADDRESS_MANTLE,
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
