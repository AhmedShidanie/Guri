export function formatPropertyDetails(bedrooms: number, bathrooms: number): string {
    return `${bedrooms} beds • ${bathrooms} baths`;
}

export function formatAddress(city: string, state: string): string {
    return `${city}, ${state}`;
}