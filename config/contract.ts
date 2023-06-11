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
    rent: '0x8b88a4f6CD209301031333BC20334613430dff03'
  },
  420: {
    name: 'OptimismTestnet',
    estate: '0xb00FCA39f7a2332508C5fDe9503C2021DEe524c7',
    rent: '0x7e80FB6Bc2e60CD13aF28F44553ee586eACDAeEa'
  },
  5001: {
    name: 'mantleTestnet',
    estate: '0x35aB012bb736e915407877F7489b0651406D825d',
    rent: '0xDd9914408871fa9CDF5b6a3481c36a827f1D0010'
  },
  10200: {
    name: 'chiadoGnosisTestnet',
    estate: '0xFe8Fa89D8D861971F5E9061B3Cb90fcaE270338F',
    rent: '0x2D72FFD12d3B4E550486a788779C9C03C413CF0E'//
  },
  167005: {
    name: 'taikoTestnet',
    estate: '0xbefC6F3B404F2BF6B4c52E05c55BE15ee3Fe294d',
    rent: '0x8b88a4f6CD209301031333BC20334613430dff03'//
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


export interface TListProperties {
  address: Hash;
  startTime: number;
  endTime: number;
  tokenId: string;
  tokenURI: any;
}

export const listProperty = ({ address, startTime, endTime, tokenId, tokenURI }: TListProperties) => ({
  address: address,
  abi: [
    {
      name: 'createPropertyListing',
      type: 'function',
      stateMutability: 'nonpayable',
      inputs: [
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      outputs: [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
    },
  ],
  args: [startTime, endTime, tokenId, tokenURI],
  enabled: Boolean(true),
  functionName: 'createPropertyListing',
})

export interface TSubmitTenantProposal {
  address: Hash;
  propertyId: number;
  metadataURI: string;
}

export const submitTenantProposal = ({ address, propertyId, metadataURI }: TSubmitTenantProposal) => ({
  address: address,
  abi: [
    {
      name: 'submitTenantProposal',
      type: 'function',
      stateMutability: 'nonpayable',
      inputs: [
        {
          "internalType": "uint256",
          "name": "propertyId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "metadataURI",
          "type": "string"
        }
      ],
      outputs: [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
    },
  ],
  args: [propertyId, metadataURI],
  enabled: Boolean(true),
  functionName: 'submitTenantProposal',
})

export interface TSelectWinner {
  address: Hash;
  propertyId: number;
  tokenId: number;
  tokenURI: string;
}

export const selectWinner = ({ address, propertyId, tokenId, tokenURI }: TSelectWinner) => ({
  address: address,
  abi: [
    {
      name: 'selectWinner',
      type: 'function',
      stateMutability: 'nonpayable',
      inputs: [
        {
          "internalType": "uint256",
          "name": "propertyId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      outputs: [],
    },
  ],
  args: [propertyId, tokenId, tokenURI],
  enabled: Boolean(true),
  functionName: 'selectWinner',
})
