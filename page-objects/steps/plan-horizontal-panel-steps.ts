import { HorizontalPanelEnum } from "../enums/horizontal-panel";
import { PlanHorizontalPanel } from "../panels/plan-horizontal-panel";

export class PlanHorizontalPanelStepsImpl {

    async getProductTitle(panel: HorizontalPanelEnum) {
        const horizontalPanel = new PlanHorizontalPanel(panel);
        return await horizontalPanel.productTitleSelector.innerText;
    }

    async getReviewCount(panel: HorizontalPanelEnum) {
        const horizontalPanel = new PlanHorizontalPanel(panel);
        return parseInt(await horizontalPanel.reviewsCountSelector.innerText);
    }

    async getPrice(panel: HorizontalPanelEnum) {
        const horizontalPanel = new PlanHorizontalPanel(panel);
        return parseFloat((await horizontalPanel.priceSelector.innerText).slice(1));
    }

}

export const PlanHorizontalPanelSteps = new PlanHorizontalPanelStepsImpl();