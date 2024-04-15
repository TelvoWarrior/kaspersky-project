import { Selector } from "testcafe";
import { Label } from "../elements/label";
import { Button } from "../elements/button";

export enum PlansEnum {
    STANDARD = 0,
    PLUS = 1,
    PREMIUM = 2,
}

export class SecurityPlan {
    private _planColumnSelector;
    private _planTitle;
    private _planName;
    private _planFeatures;
    private _planPrice;
    private _learnMoreButton;

    constructor(plan: PlansEnum) {
        this._planColumnSelector = Selector(`div[class*="OpenBuyBlockColumn_columnWrapper"]`).nth(plan);
        this._planTitle = new Label(this._planColumnSelector.find(`div[data-at-match-height-group="openBuyBlockColumnHeader"]`), `Plan Title`);
        this._planName = new Label(this._planColumnSelector.find(`span[class*="Product_nameLine"]`).nth(0), `Plan Name`);
        this._planFeatures = new Label(this._planColumnSelector.find(`li[class*="ListItem"]`), `Plan Features`);
        this._planPrice = new Label(this._planColumnSelector.find(`div[class*="FromPrice"]`).find(`span`).nth(1), `Plan Price`);
        this._learnMoreButton = new Button(this._planColumnSelector.find(`span`).withText(`Learn More`), `Learn More`);
    }

    get columnSelector() {
        return this._planColumnSelector;
    }

    get planTitle() {
        return this._planTitle;
    }

    get planName() {
        return this._planName;
    }

    get planFeatures() {
        return this._planFeatures;
    }

    get planPrice() {
        return this._planPrice;
    }
    
    get learnMoreButton() {
        return this._learnMoreButton;
    }
}