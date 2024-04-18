import { Selector } from "testcafe";
import { HorizontalPanelEnum } from "../enums/horizontal-panel";

export class PlanHorizontalPanel {
    private _planContainerSelector:Selector;
    private _productTitleSelector:Selector;
    private _reviewsCountSelector:Selector;
    private _priceSelector:Selector;
    private _comboboxSelector:Selector;

    constructor(panel:HorizontalPanelEnum){
        this. _planContainerSelector = Selector(`div[class*="BuyBlock_inner"]`).nth(panel);
        this. _productTitleSelector = this._planContainerSelector.find(`div[class*="Product_title"]`);
        this. _reviewsCountSelector = this._planContainerSelector.find(`div[class*="Product_label"]`);
        this. _priceSelector = this._planContainerSelector.find(`div[data-at-selector="current-price"]`);
        this. _comboboxSelector = this._planContainerSelector.find(`div[role="combobox"]`);
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
}