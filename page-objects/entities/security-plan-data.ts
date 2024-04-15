import { SecurityPlan } from "../panels/security-plan";

export class SecurityPlanData {
    public readonly NAME;
    public readonly PRICE;

    constructor(plan:SecurityPlan) {
        this.NAME = plan.planName;
        this.PRICE = plan.planPrice;
    }
}