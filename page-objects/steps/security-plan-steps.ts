import { t } from "testcafe";
import { Label } from "../elements/label";
import { SecurityPlan } from "../panels/security-plan";
import { Logger } from "testcafe-reporter-acd-html-reporter/lib/Logger";

export class SecurityPlanStepsImpl {
    async checkSecurityPlanExists(plan:SecurityPlan) {
        Logger.info(`Checking ${await plan.planTitle.innerText} exists`)
        await t.expect(await plan.columnSelector.exists).ok(`Check ${await plan.planTitle.innerText} exists`);
    }

    async checkSecurityPlanPriceExists(plan:SecurityPlan) {
        Logger.info(`Checking ${await plan.planTitle.innerText} price exists`)
        await t.expect(await plan.planPrice.exists).ok(`Check ${await plan.planTitle.innerText} price exists`);
    }

    async checkSecurityPlanFeaturesExist(plan:SecurityPlan) {
        Logger.info(`Checking ${await plan.planTitle.innerText} features exists`)
        await t.expect(await plan.planFeatures.exists).ok(`Check ${await plan.planTitle.innerText} features exists`);
    }
}

export const SecurityPlanSteps = new SecurityPlanStepsImpl();