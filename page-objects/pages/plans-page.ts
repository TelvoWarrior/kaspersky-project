import { PlanItem } from "../enums/plan-item";
import { PlanPanel } from "../panels/plan-panel";

export class PlansPage {
    private _planStandard = new PlanPanel(PlanItem.STANDARD);
    private _planPlus = new PlanPanel(PlanItem.PLUS);
    private _planPremium = new PlanPanel(PlanItem.PREMIUM);

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
}