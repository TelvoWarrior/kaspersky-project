export class ProductDataValue {
    private _productName:string;
    private _productReviews:number;
    private _productFeatures:string[];
    private _productMinPrice:number;

    constructor(name:string, reviews:number, features:string[], minPrice:number) {
        this._productName = name;
        this._productReviews = reviews;
        this._productFeatures = features;
        this._productMinPrice = minPrice;
    }
}