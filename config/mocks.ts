import { Offer } from "./types";

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
      '/logo-dark.svg',
      '/logo-dark.svg',
      '/logo-dark.svg',
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
      '/logo-dark.svg',
      '/logo-dark.svg',
      '/logo-dark.svg',
    ],
  },
];


export const mockPropertyOffers: Offer[] = [
  {
    offerId: "1",
    type: "rent",
    landlord: "Jane Smith",
    property: {
      title: "Cozy 2 Bedroom Downtown Apartment",
      description: "Perfectly located in the heart of the city, this apartment offers comfortable living with access to local amenities.",
      imageUrls: ["property-image-1.jpeg", "property-image-2.jpeg", "property-image-3.jpeg"],
      location: {
        address: "123 Maple Street, Downtown, CityName",
        lat: 40.712776,
        lng: -74.005974
      },
      bedrooms: 2,
      bathrooms: 1,
      squareFeet: 850,
      amenities: ["Central Air", "Hardwood Floors", "Pet Friendly"],
      yearBuilt: 1999
    },
    leaseTerms: "12 months",
    availabilityDate: "2024-03-01",
    rentalPrice: 2200
  },
  {
    offerId: "2",
    type: "sell",
    seller: "Michael Johnson",
    property: {
      title: "Spacious Family Home in Friendly Neighborhood",
      description: "A beautiful home with ample space for a growing family, featuring a large backyard with a pool and a modern kitchen.",
      imageUrls: ["property-image-4.jpeg", "property-image-5.jpeg", "property-image-6.jpeg"],
      location: {
        address: "456 Oak Lane, Suburbia, CityName",
        lat: 37.774929,
        lng: -122.419416
      },
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2200,
      amenities: ["Two Car Garage", "Swimming Pool", "Garden"],
      yearBuilt: 1998
    },
    salePrice: 450000
  },
  {
    offerId: "3",
    type: "short lease",
    owner: "Luis Alvarez",
    property: {
      title: "Modern Lakeside Condo with Stunning Views",
      description: "Experience luxury living with this modern condo, offering breathtaking lake views and exclusive amenities.",
      imageUrls: ["property-image-7.jpeg", "property-image-8.jpeg", "property-image-9.jpeg"],
      location: {
        address: "789 Pine Ridge, Lakeside, CityName",
        lat: 34.052234,
        lng: -118.243685
      },
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 1200,
      amenities: ["Balcony with Lake View", "Gym Access", "Security System"],
      yearBuilt: 2005
    },
    leaseTerms: "2 months",
    availabilityDate: "2024-04-01",
    rentalPrice: 3000,
    status: "Available"
  }
];
