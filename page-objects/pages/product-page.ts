import { Selector } from "testcafe";
import { PlanItem } from "../enums/plan-item";
import { PlanPanelExtended } from "../panels/plan-panel-extended";
import { ProductPanel } from "../panels/product-panel";

export class ProductPage {
    public static readonly LOGO_SELECTOR = Selector(`a[class*="Logo"]`);
    private _topProductPanel = new ProductPanel();

    private _featureBlockSelector = Selector(`div[class*="FeatureInfoGrid_cardsContent"]`);
    private _featureBlockTitleSelector = this._featureBlockSelector.find(`h4`);
    private _featureCardSelector = Selector(`div[class*="PaperLight_root"]`);
    private _featureCardTitleSelector = this._featureCardSelector.find(`h5`);
   
    private _planStandard = new PlanPanelExtended(PlanItem.STANDARD);
    private _planPlus = new PlanPanelExtended(PlanItem.PLUS);
    private _planPremium = new PlanPanelExtended(PlanItem.PREMIUM);

    protected getPlanSelector(plan: PlanItem) {
        switch (plan) {
            case 0:
                return this._planStandard;
            case 1:
                return this._planPlus;
            case 2:
                return this._planPremium;
        }
    }

    get featureCardTitleSelector(){
        return this._featureCardTitleSelector;
    }

    get featureBlockSelector(){
        return this._featureBlockSelector;
    }

    get featureBlockTitleSelector(){
        return this._featureBlockTitleSelector;
    }
}