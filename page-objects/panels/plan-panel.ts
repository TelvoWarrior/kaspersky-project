import { Selector } from "testcafe";
import { PlanItem } from "../enums/plan-item";
import { Button } from "../elements/button";

export class PlanPanel {
    protected _planContainerSelector: Selector;
    protected _planTitleSelector: Selector;
    protected _productTitleSelector: Selector;
    protected _reviewsCountSelector: Selector;
    protected _featureSelector: Selector;
    protected _fromPriceSelector: Selector;
    protected _learnMoreButtonSelector: Button;

    constructor(plan: PlanItem) {
        this._planContainerSelector = Selector(`div[class*="openBuyBlockColumn"]`).nth(plan);
        this._planTitleSelector = this._planContainerSelector.find(`div[data-at-match-height-group="openBuyBlockColumnHeader"]`);
        this._productTitleSelector = this._planContainerSelector.find(`a[class*="Product"]`);
        this._reviewsCountSelector = this._planContainerSelector.find(`div[class*="Reviews_label"]`);
        this._featureSelector = this._planContainerSelector.find(`div[class*="feature"]`).filterVisible();
        this._fromPriceSelector = this._planContainerSelector.find(`div[class*="FromPrice_hidden"]`);
        this._learnMoreButtonSelector = new Button(this._planContainerSelector.find(`a[data-at-selector="default-button"]`), `Learn More`);
    }

    get planTitleSelector() {
        return this._planTitleSelector;
    }

    get productTitleSelector() {
        return this._productTitleSelector;
    }

    get reviewsCountSelector() {
        return this._reviewsCountSelector;
    }

    get featureSelector() {
        return this._featureSelector;
    }

    get fromPriceSelector() {
        return this._fromPriceSelector;
    }

    get learnMoreButtonSelector() {
        return this._learnMoreButtonSelector;
    }
}