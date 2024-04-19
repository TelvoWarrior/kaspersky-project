import { Selector } from "testcafe";

export class ProductPanel {
    private _planContainerSelector: Selector;
    private _productTitleSelector: Selector;
    private _reviewsCountSelector: Selector;
    private _priceSelector: Selector;
    private _comboboxSelector: Selector;
    private _comboboxOptionSelector: Selector;

    constructor() {
        this._planContainerSelector = Selector(`div[class*="BuyBlock_inner"]`);
        this._productTitleSelector = this._planContainerSelector.find(`div[class*="Product_title"]`);
        this._reviewsCountSelector = this._planContainerSelector.find(`div[class*="Product_label"]`);
        this._priceSelector = this._planContainerSelector.find(`div[data-at-selector="current-price"]`);
        this._comboboxSelector = this._planContainerSelector.find(`div[role="combobox"]`);
    }

    get productTitleSelector() {
        return this._productTitleSelector;
    }

    get reviewsCountSelector() {
        return this._reviewsCountSelector;
    }

    get priceSelector() {
        return this._priceSelector;
    }

    get comboboxSelector() {
        return this._comboboxSelector;
    }

    get comboboxOptionSelector() {
        return this._comboboxOptionSelector;
    }
}