export const contractAddress = '0xE47845dac04A7C91E73B8f09b441785810D40f69';
export const localContractAddress = '0x5fc8d32690cc91d4c39d9d3abcbd16989f875707';
// 0x5FbDB2315678afecb367f032d93F642f64180aa3
export const filterOptions = {
  location: [
    'Manhattan',
    'Brooklyn',
    'Queens',
    'Bronx',
    'Staten Island',
  ],
  price: [
    'Under $1,000',
    '$1,000 - $2,000',
    '$2,000 - $3,000',
    '$3,000 - $4,000',
    '$4,000 - $5,000',
    'Over $5,000',
  ],
  bedrooms: [
    'Studio',
    '1 Bedroom',
    '2 Bedrooms',
    '3 Bedrooms',
    '4+ Bedrooms',
  ],
};


export interface Contract {
  address: string;
}

export interface Apartment {
  id: number;
  // address: string
  title: string;
  description: string;
  location: string;
  price: number;
  contract: Contract;
  imageUrls: string[];
}

export const apartments: Apartment[] = [
  {
    id: 1,
    contract: {
      address: '0x123',
    },
    title: 'Luxury Apartment in Manhattan',
    description: 'Spacious 2-bedroom apartment with stunning views of Central Park.',
    location: 'Manhattan',
    price: 5000,
    imageUrls: [
      '/logo.svg',
      '/logo.svg',
      '/logo.svg',
    ],
  },
  {
    id: 2,
    contract: {
      address: '0x121',
    }, title: 'Cozy Studio in Brooklyn',
    description: "Charming studio apartment in the heart of Brooklyn's trendiest neighborhood.",
    location: 'Brooklyn',
    price: 2000,
    imageUrls: [
      '/logo.svg',
      '/logo.svg',
      '/logo.svg',
    ],
  },
];
