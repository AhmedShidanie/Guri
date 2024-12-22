export interface Property {
  id: string;
  type: 'rent' | 'sale';
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  images: string[];
  amenities: string[];
  petFriendly: boolean;
  virtualTourUrl?: string;
  description: string;
  datePosted: Date;
}