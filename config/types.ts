
export interface Property {
  title: string;
  description: string;
  imageUrls: string[];
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  amenities: string[];
  yearBuilt?: number;
}

export interface Offer {
  offerId: string;
  type: "rent" | "sell" | "short lease"; // Removed "own", added "short lease"
  landlord?: string;
  seller?: string;
  owner?: string;
  property: Property;
  leaseTerms?: string;
  availabilityDate?: string;
  rentalPrice?: number;
  salePrice?: number;
  askingPrice?: number;
  status?: string;
}

export interface FetchError {
  message: string;
  // You can add more details depending on what information you receive from errors
}
