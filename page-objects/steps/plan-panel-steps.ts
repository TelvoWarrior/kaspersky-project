import { t } from "testcafe";
import { PlanEnum } from "../enums/plan-enum";
import { PlanPanel } from "../panels/plan-panel";
import { Logger } from "testcafe-reporter-acd-html-reporter/lib/Logger";

export class PlanPanelStepsImpl {

    async getPlanTitle(plan: PlanEnum) {
        const planPanel = new PlanPanel(plan);
        return await planPanel.planTitleSelector.innerText;
    }

    async getProductTitle(plan: PlanEnum) {
        const planPanel = new PlanPanel(plan);
        return await planPanel.productTitleSelector.innerText;
    }

    async getReviewsCount(plan: PlanEnum) {
        const planPanel = new PlanPanel(plan);
        return parseInt(await planPanel.reviewsCountSelector.innerText);
    }

    async getFeaturesList(plan: PlanEnum) {
        const planPanel = new PlanPanel(plan);
        const featuresCount = await planPanel.featureSelector.count;
        const featuresList:string[] = [];
        for (let i = 0; i < featuresCount; i++) {
            const currentFeature = await planPanel.featureSelector.nth(i).innerText;
            featuresList.push(currentFeature);
        }
        return featuresList;
    }

    async getFromPrice(plan:PlanEnum) {
        const planPanel = new PlanPanel(plan);
        return parseFloat((await (planPanel.fromPriceSelector.innerText)).replace(/[^\d.]/g, ""));
    }

    async checkProductPriceExists(plan:PlanEnum) {
        Logger.info(`Check ${await this.getPlanTitle(plan)}'s price exists`);
        await t.expect(await this.getFromPrice(plan)).ok(`Check ${await this.getPlanTitle(plan)}'s price exists`);
    }

    async checkProductReviewsExist(plan:PlanEnum) {
        Logger.info(`Check ${await this.getPlanTitle(plan)}'s reviews exist`);
        await t.expect(await this.getReviewsCount(plan)).ok(`Check ${await this.getPlanTitle(plan)}'s price exists`);
    }

    async checkProductFeaturesExist(plan:PlanEnum) {
        Logger.info(`Check ${await this.getPlanTitle(plan)}'s reviews exist`);
        await t.expect(await this.getFeaturesList(plan)).ok(`Check ${await this.getPlanTitle(plan)}'s price exists`);
    }

}

export const PlanPanelSteps = new PlanPanelStepsImpl();