import { Selector } from "testcafe";
import { PlanEnum } from "../enums/plan-enum";

export class PlanPanel {
    protected _planContainerSelector: Selector;
    protected _planTitleSelector: Selector;
    protected _productTitleSelector: Selector;
    protected _reviewsCountSelector: Selector;
    protected _featureSelector: Selector;
    protected _fromPriceSelector: Selector;
    protected _learnMoreButtonSelector: Selector;

    constructor(plan: PlanEnum) {
        this._planContainerSelector = Selector(`div[class*="openBuyBlockColumn"]`).nth(plan);
        this._planTitleSelector = this._planContainerSelector.find(`div[data-at-match-height-group="openBuyBlockColumnHeader"]`);
        this._productTitleSelector = this._planContainerSelector.find(`a[class*="Product"]`);
        this._reviewsCountSelector = this._planContainerSelector.find(`div[class*="Reviews_label"]`);
        this._featureSelector = this._planContainerSelector.find(`div[class*="feature"]`).filterVisible();
        this._fromPriceSelector = this._planContainerSelector.find(`div[class*="FromPrice_hidden"]`);
        this._learnMoreButtonSelector = this._planContainerSelector.find(`a[data-at-selector="default-button"]`);
    }

    get planTitleSelector(){
        return this._planTitleSelector;
    }

    get productTitleSelector(){
        return this._productTitleSelector;
    }

    get reviewsCountSelector(){
        return this._reviewsCountSelector;
    }

    get featureSelector(){
        return this._featureSelector;
    }

    get fromPriceSelector(){
        return this._fromPriceSelector;
    }

    get learnMoreButtonSelector(){
        return this._learnMoreButtonSelector;
    }
}