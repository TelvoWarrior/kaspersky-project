import { t } from "testcafe";
import { TEST_URL } from "../test-data/configuration";
import { Logger } from "testcafe-reporter-acd-html-reporter/lib/Logger";
import { MainPage } from "../page-objects/pages/main-page";
import { PlanPanelSteps } from "../page-objects/steps/plan-panel-steps";
import { PlanEnum } from "../page-objects/enums/plan-enum";
import { PlanPanel } from "../page-objects/panels/plan-panel";
import { PlanHorizontalPanelSteps } from "../page-objects/steps/plan-horizontal-panel-steps";
import { HorizontalPanelEnum } from "../page-objects/enums/horizontal-panel";
import { ProductDataValue } from "../page-objects/entities/product-data-value";

fixture(`Onliner Project`)
    .page(TEST_URL);

test(``, async () => {
    await t.maximizeWindow();
    await t.pressKey(`ESC`);

    Logger.step(1, `First step`)
    await new MainPage().seeAllProductsButton.click();

    console.log(`Get Plan Title: ${await PlanPanelSteps.getPlanTitle(PlanEnum.STANDARD)}`)
    console.log(`Get Product Title: ${await PlanPanelSteps.getProductTitle(PlanEnum.STANDARD)}`)
    console.log(`Get Reviews Count: ${await PlanPanelSteps.getReviewsCount(PlanEnum.STANDARD)}`)
    console.log(`Get From Price: ${await PlanPanelSteps.getFromPrice(PlanEnum.STANDARD)}`)
    console.log(`Get Features List: ${await PlanPanelSteps.getFeaturesList(PlanEnum.STANDARD)}`)

    const planStandard = new PlanPanel(PlanEnum.STANDARD);
    const planPlus = new PlanPanel(PlanEnum.PLUS);
    const planPremium = new PlanPanel(PlanEnum.PREMIUM); 

    const planStandardData = new ProductDataValue(
        planStandardData.getProductTitle(PlanEnum.STANDARD), 
        planStandardData.getReviewsCount(PlanEnum.STANDARD),
        planStandardData.getFeaturesList(PlanEnum.STANDARD),
        planStandardData.getFromPrice(PlanEnum.STANDARD)
    );
    
    const planPlusData = new ProductDataValue();
    const planPremiumData = new ProductDataValue();

    await t.click(planStandard.learnMoreButtonSelector); 
    console.log(`Title: ${await PlanHorizontalPanelSteps.getProductTitle(HorizontalPanelEnum.TOP)}`);
    console.log(`Review Count: ${await PlanHorizontalPanelSteps.getReviewCount(HorizontalPanelEnum.TOP)}`);
    console.log(`Price: ${await PlanHorizontalPanelSteps.getPrice(HorizontalPanelEnum.TOP)}`);

    await t.debug();
});



 