export class ComboboxOptionsList {
    private _devicesCount:number;
    private _subscriptionTerm:number;
    private _price:number;

    constructor(devicesCount:number, subscriptionTerm:number, price:number) {
        this._devicesCount = devicesCount;
        this._subscriptionTerm = subscriptionTerm;
        this._price = price;
    }

    get devicesCount() {
        return this._devicesCount;
    }

    get subscriptionTerm() {
        return this._subscriptionTerm;
    }

    get price() {
        return this._price;
    }
}