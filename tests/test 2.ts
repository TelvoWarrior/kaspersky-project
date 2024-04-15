import { Selector, t } from "testcafe";
import { TEST_URL } from "../test-data/configuration";
import { Logger } from "testcafe-reporter-acd-html-reporter/lib/Logger";
import { PlansEnum, SecurityPlan } from "../page-objects/panels/security-plan";
import { CommonSteps } from "../page-objects/steps/common-steps";

fixture(`Onliner Project`)
    .page(TEST_URL);

test(``, async () => {
    await t.maximizeWindow();
    Logger.step(1, `First step`)
    const closeButtonSelector = Selector(`button[data-at-selector*="close"]`).nth(2);
    const seeAllProductsButtonSelector = Selector(`a[href*="home-security"][data-at-selector="default-button"]`);
    
    await t.click(closeButtonSelector);
    await t.click(seeAllProductsButtonSelector);

    const standardPlan = new SecurityPlan(PlansEnum.STANDARD);
    await CommonSteps.hover(standardPlan.planTitle);
    await t.wait(1000);
    await CommonSteps.hover(standardPlan.planFeatures);
    await t.wait(1000);
    await CommonSteps.hover(standardPlan.planPrice);
    await t.wait(1000);
    await CommonSteps.hover(standardPlan.learnMoreButton);
    await t.wait(1000);

    const plusPlan = new SecurityPlan(PlansEnum.PLUS);
    await CommonSteps.hover(plusPlan.planTitle);
    await t.wait(1000);
    await CommonSteps.hover(plusPlan.planFeatures);
    await t.wait(1000);
    await CommonSteps.hover(plusPlan.planPrice);
    await t.wait(1000);
    await CommonSteps.hover(plusPlan.learnMoreButton);
    await t.wait(1000);

    const premiumPlan = new SecurityPlan(PlansEnum.PREMIUM);
    await CommonSteps.hover(premiumPlan.planTitle);
    await t.wait(1000);
    await CommonSteps.hover(premiumPlan.planFeatures);
    await t.wait(1000);
    await CommonSteps.hover(premiumPlan.planPrice);
    await t.wait(1000);
    await CommonSteps.hover(premiumPlan.learnMoreButton);
    await t.wait(1000);
    











    await t.debug();
});

 