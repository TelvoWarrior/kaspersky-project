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
    await CommonSteps.click(standardPlan.learnMoreButton);
    


    











    await t.debug();
});

 