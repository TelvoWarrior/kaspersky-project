import { Selector } from "testcafe";
import { PlanPanelExtended } from "../panels/plan-panel-extended";
import { PlanItem } from "../enums/plan-item";

export class ComboboxSelector {
    public static readonly PRODUCT_PANEL_TOP = Selector(`div[class*="BuyBlock_inner"]`).nth(0).find(`div[role="combobox"]`);
    public static readonly PRODUCT_PANEL_BOTTOM = Selector(`div[class*="BuyBlock_inner"]`).nth(1).find(`div[role="combobox"]`);
    public static readonly PLAN_PANEL_STANDARD = new PlanPanelExtended(PlanItem.STANDARD).comboboxSelector;
    public static readonly PLAN_PANEL_PLUS = new PlanPanelExtended(PlanItem.PLUS).comboboxSelector;
    public static readonly PLAN_PANEL_PREMIUM = new PlanPanelExtended(PlanItem.PREMIUM).comboboxSelector;
}