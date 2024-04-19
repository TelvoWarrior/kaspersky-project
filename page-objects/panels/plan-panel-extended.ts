import { PlanPanel } from "./plan-panel";
import { PlanItem } from "../enums/plan-item";
import { Button } from "../elements/button";

export class PlanPanelExtended extends PlanPanel {
    protected _planContainerSelector: Selector;
    protected _planTitleSelector: Selector;
    protected _productTitleSelector: Selector;
    protected _reviewsCountSelector: Selector;
    protected _featureSelector: Selector;
    protected _fromPriceSelector: Selector;
    protected _learnMoreButtonSelector: Button;
    protected _comboboxSelector: Selector;

    constructor(plan: PlanItem) {
        super(plan);
        this._fromPriceSelector = this._planContainerSelector.find(`div[class*="Price_price"]`).withAttribute(`data-at-price`);
        this._comboboxSelector = this._planContainerSelector.find(`div[role="combobox"]`);
    }
    
    get comboboxSelector() {
        return this._comboboxSelector;
    }
}