export class ProductDataValue {
    private _productTitle:string;
    private _productReviews:number;
    private _productFeatures:string[];
    private _productMinPrice:number;

    constructor(name:string, reviews:number, features:string[], minPrice:number) {
        this._productTitle = name;
        this._productReviews = reviews;
        this._productFeatures = features;
        this._productMinPrice = minPrice;
    }

    get title(){
        return this._productTitle;
    }

    get reviews(){
        return this._productReviews;
    }

    get features(){
        return this._productFeatures;
    }

    get price(){
        return this._productMinPrice;
    }
}