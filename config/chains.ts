import type { Chain } from 'wagmi/chains'


export const chiadoGnosisTestnet: Chain = {
  id: 10200,
  name: 'Chiado Testnet (XDAI)',
  network: 'Gnosis',
  nativeCurrency: {
    name: 'XDAI',
    symbol: 'XDAI',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.chiadochain.net']
    },
    public: {
      http: ['https://rpc.chiadochain.net']
    }
  },
  blockExplorers: {
    default: {
      name: 'blockscout',
      url: 'https://blockscout.com/gnosis/chiado'
    }
  }
}
