import { Observable } from '@nativescript/core';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/property.service';
import { formatPrice } from '../../utils/price-formatter';
import { formatPropertyDetails, formatAddress } from '../../utils/property-formatter';

export class HomeViewModel extends Observable {
    private _properties: Property[] = [];
    private _isLoading = false;
    private propertyService: PropertyService;

    constructor() {
        super();
        this.propertyService = new PropertyService();
        this.loadProperties();
    }

    get properties(): any[] {
        return this._properties.map(property => ({
            ...property,
            formattedPrice: formatPrice(property.price),
            formattedDetails: formatPropertyDetails(property.bedrooms, property.bathrooms),
            formattedAddress: formatAddress(property.address.city, property.address.state)
        }));
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    async loadProperties() {
        try {
            this._isLoading = true;
            this.notifyPropertyChange('isLoading', true);

            this._properties = await this.propertyService.getProperties();
            this.notifyPropertyChange('properties', this.properties);
        } catch (error) {
            console.error('Error loading properties:', error);
            // TODO: Show error message to user
        } finally {
            this._isLoading = false;
            this.notifyPropertyChange('isLoading', false);
        }
    }

    onPropertyTap(args) {
        const property = this._properties[args.index];
        console.log('Selected property:', property.title);
        // TODO: Navigate to property details page
    }

    onSearch(args) {
        const searchBar = args.object;
        console.log('Searching for:', searchBar.text);
        // TODO: Implement search logic
    }

    showPriceFilter() {
        console.log('Show price filter');
        // TODO: Implement price filter dialog
    }

    showRoomsFilter() {
        console.log('Show rooms filter');
        // TODO: Implement rooms filter dialog
    }

    showTypeFilter() {
        console.log('Show type filter');
        // TODO: Implement property type filter dialog
    }

    showMoreFilters() {
        console.log('Show more filters');
        // TODO: Implement additional filters dialog
    }

    showNotifications() {
        console.log('Show notifications');
        // TODO: Implement notifications view
    }
}