// import { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import { useNetwork, usePublicClient } from 'wagmi';
// // import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
// const useERC721Tokens = (): {
//   tokenURIs: string[];
//   loading: boolean;
//   error: string | null;
// } => {
//   const [tokenURIs, setTokenURIs] = useState<string[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const publicClient = usePublicClient()
//   useEffect(() => {
//     const fetchTokenURIs = async () => {
//       setLoading(true);
//       try {
//         // Connect to the Ethereum network using Ethers.js
//         const provider = new ethers.Provider;

//         // Replace 'contractAddress' with the address of the ERC721 contract you want to interact with
//         // const contractAddress = '0x...';

//         // // Replace 'contractABI' with the ABI (Application Binary Interface) of the ERC721 contract
//         const contractABI = [...];

//         // Create an instance of the ERC721 contract
//         const contract = new ethers.Contract(contractAddress, contractABI, provider);

//         // Get the total number of minted tokens
//         const totalSupply = await contract.totalSupply();

//         // Fetch the tokenURI for each minted token
//         const fetchedTokenURIs = [];
//         for (let i = 0; i < totalSupply; i++) {
//           const tokenId = await contract.tokenByIndex(i);
//           const tokenURI = await contract.tokenURI(tokenId);
//           fetchedTokenURIs.push(tokenURI);
//         }

//         setTokenURIs(fetchedTokenURIs);
//         setLoading(false);
//       } catch (err) {
//         setError((err as Error).message);
//         setLoading(false);
//       }
//     };

//     fetchTokenURIs();
//   }, []);

//   return { tokenURIs, loading, error };
// };
