import { Property } from '../models/property.model';

export class PropertyService {
    async getProperties(): Promise<Property[]> {
        // Simulated API call
        return [
            {
                id: '1',
                type: 'sale',
                title: 'Modern Downtown Apartment',
                price: 450000,
                bedrooms: 2,
                bathrooms: 2,
                squareFootage: 1200,
                address: {
                    street: '123 Main St',
                    city: 'Austin',
                    state: 'TX',
                    zipCode: '78701'
                },
                images: ['https://raw.githubusercontent.com/NativeScript/sample-PhotoAlbum/master/app/res/05.jpg'],
                amenities: ['Pool', 'Gym', 'Parking'],
                petFriendly: true,
                description: 'Beautiful modern apartment in the heart of downtown',
                datePosted: new Date()
            },
            {
                id: '2',
                type: 'rent',
                title: 'Cozy Studio in Tech District',
                price: 1800,
                bedrooms: 1,
                bathrooms: 1,
                squareFootage: 600,
                address: {
                    street: '456 Innovation Ave',
                    city: 'Austin',
                    state: 'TX',
                    zipCode: '78702'
                },
                images: ['https://raw.githubusercontent.com/NativeScript/sample-PhotoAlbum/master/app/res/02.jpg'],
                amenities: ['WiFi', 'Furnished', 'Utilities Included'],
                petFriendly: false,
                description: 'Perfect for young professionals',
                datePosted: new Date()
            }
        ];
    }
}