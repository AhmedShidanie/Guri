export interface PropertyMedia {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string; // Thumbnail for videos
}

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
    media: PropertyMedia[];
    amenities: string[];
    petFriendly: boolean;
    virtualTourUrl?: string;
    description: string;
    datePosted: Date;
}