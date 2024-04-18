import { PlanPanel } from "./plan-panel";
import { PlanEnum } from "../enums/plan-enum";

export class PlanPanelExtended extends PlanPanel {
    protected _planContainerSelector: Selector;
    protected _planTitleSelector: Selector;
    protected _productTitleSelector: Selector;
    protected _reviewsCountSelector: Selector;
    protected _featureSelector: Selector;
    protected _fromPriceSelector: Selector;
    protected _learnMoreButtonSelector: Selector;
    protected _comboboxSelector: Selector;

    constructor(plan: PlanEnum) {
        super(plan);
        this._fromPriceSelector = this._planContainerSelector.find(`div[class*="Price_main"]`);
        this._comboboxSelector = this._planContainerSelector.find(`div[role="combobox"]`);
    } 
}