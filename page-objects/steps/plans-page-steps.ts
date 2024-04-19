import { t } from "testcafe";
import { PlanItem } from "../enums/plan-item";
import { Logger } from "testcafe-reporter-acd-html-reporter/lib/Logger";
import { PlansPage } from "../pages/plans-page";
import { ProductDataValue } from "../entities/product-data-value";

export class PlansPageStepsImpl extends PlansPage {

    async getPlanTitle(plan: PlanItem) {
        const planPanel = this.getPlanSelector(plan);
        return await planPanel.planTitleSelector.innerText;
    }

    async getProductTitle(plan: PlanItem) {
        const planPanel = this.getPlanSelector(plan);
        return await planPanel.productTitleSelector.innerText;
    }

    async getReviewsCount(plan: PlanItem) {
        const planPanel = this.getPlanSelector(plan);
        return parseInt(await planPanel.reviewsCountSelector.innerText);
    }

    async getFeaturesList(plan: PlanItem) {
        const planPanel = this.getPlanSelector(plan);
        const featuresCount = await planPanel.featureSelector.count;
        const featuresList:string[] = [];
        for (let i = 0; i < featuresCount; i++) {
            const currentFeature = await planPanel.featureSelector.nth(i).innerText;
            featuresList.push(currentFeature);
        }
        return featuresList;
    }

    async getFromPrice(plan:PlanItem) {
        const planPanel = this.getPlanSelector(plan);
        return parseFloat((await (planPanel.fromPriceSelector.innerText)).replace(/[^\d.]/g, ""));
    }

    async getPlanData(plan:PlanItem) {
        const title = await this.getProductTitle(plan);
        const reviews = await this.getReviewsCount(plan);
        const features = await this.getFeaturesList(plan);
        const price = await this.getFromPrice(plan);
        return new ProductDataValue(title,reviews,features,price);
    }

    async checkProductPriceExists(plan:PlanItem) {
        Logger.info(`Check ${await this.getPlanTitle(plan)}'s price exists`);
        await t.expect(await this.getFromPrice(plan)).ok(`Check ${await this.getPlanTitle(plan)}'s price exists`);
    }

    async checkProductReviewsExist(plan:PlanItem) {
        Logger.info(`Check ${await this.getPlanTitle(plan)}'s reviews exist`);
        await t.expect(await this.getReviewsCount(plan)).ok(`Check ${await this.getPlanTitle(plan)}'s price exists`);
    }

    async checkProductFeaturesExist(plan:PlanItem) {
        Logger.info(`Check ${await this.getPlanTitle(plan)}'s reviews exist`);
        await t.expect(await this.getFeaturesList(plan)).ok(`Check ${await this.getPlanTitle(plan)}'s price exists`);
    }

    async checkPlanDataExists(data:ProductDataValue){
        await t.expect(data.price).ok(`Check ${data.price} exists`);
        await t.expect(data.reviews).ok(`Check ${data.reviews} exist`);
        await t.expect(data.features).ok(`Check ${data.features} exist`);
    }

}

export const PlansPageSteps = new PlansPageStepsImpl();