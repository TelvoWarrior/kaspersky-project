import { t } from "testcafe";
import { TEST_URL } from "../test-data/configuration";
import { Logger } from "testcafe-reporter-acd-html-reporter/lib/Logger";
import { MainPage } from "../page-objects/pages/main-page";
import { PlanItem } from "../page-objects/enums/plan-item";
import { PlanPanel } from "../page-objects/panels/plan-panel";
import { ProductPageSteps } from "../page-objects/steps/product-page-steps";
import { ComboboxSelector } from "../page-objects/entities/combobox-selector";
import { PlansPageSteps } from "../page-objects/steps/plans-page-steps";
import { ProductPage } from "../page-objects/pages/product-page";

fixture(`Kaspersky Project`)
    .page(TEST_URL);

test(`Kaspersky test`, async () => {
    await t.maximizeWindow();
    await t.pressKey(`ESC`);


    //  1 Click 'See All Products' button
    //  Get data from each Plan
    //  Check data in each plan exists
    Logger.step(1, `Click 'See All Products. Check there're 3 product plans and each plan has price, reviews and features'`)
    const mainPage = new MainPage();
    const seeAllProductsButton = mainPage.seeAllProductsButton
    await seeAllProductsButton.click();
    const standardPlanData = await PlansPageSteps.getPlanData(PlanItem.STANDARD);
    const plusPlanData = await PlansPageSteps.getPlanData(PlanItem.PLUS);
    const premiumPlanData = await PlansPageSteps.getPlanData(PlanItem.PREMIUM);
    await PlansPageSteps.checkPlanDataExists(standardPlanData);
    await PlansPageSteps.checkPlanDataExists(plusPlanData);
    await PlansPageSteps.checkPlanDataExists(premiumPlanData);



    //  2 Click 'Learn More' in Standard Plan
    //  Get product data from top horizontal panel
    //  Get plan data from botton vertical panel from 'Standard Plan' section
    //  Check data from top and bottom panels are the same as data from previous page in 'Standard Plan' section
    Logger.step(2, `Click 'Learn More' in Standard Plan. Check product panel's data, data in bottom panel the same as in on plan's page`)
    const standardPlan = new PlanPanel(PlanItem.STANDARD);
    await standardPlan.learnMoreButtonSelector.click();
    const standardProductPlanData = await ProductPageSteps.getProductData();
    const standardExtendedPlanData = await ProductPageSteps.getExtendedPlanData(PlanItem.STANDARD);
    await ProductPageSteps.checkProductData(standardPlanData, standardProductPlanData);
    await ProductPageSteps.checkPlanData(standardPlanData, standardExtendedPlanData);


    //  3 Expand combobox in top horizontal panel
    //  Check costs for more devices and years are more expensive than for lower amount devices and subscription years
    //  Check discount subsciption price for 2 years are cheaper than 2 separate 1-year plans
    Logger.step(3, `Expand combobox. Check prices.`);
    const topPanelCombo = await ProductPageSteps.getComboboxOptionsList(ComboboxSelector.PRODUCT_PANEL_TOP);
    await ProductPageSteps.checkComboboxPrices(topPanelCombo);
    await ProductPageSteps.checkSubscriptionPrices(topPanelCombo);
    

    //  4 Expand combobox in vertical Plan Panel in 'Standard Plan' section
    //  Check that prices in this combobox the same as in combobox from previous, horizontal panel
    Logger.step(4, `Expand combobox in plan panel. Check items the same as in Product Panel`)
    const standardPanelCombo = await ProductPageSteps.getComboboxOptionsList(ComboboxSelector.PLAN_PANEL_STANDARD);
    await ProductPageSteps.checkComboboxesValuesAreTheSame(topPanelCombo, standardPanelCombo);



    //  5   Click 'Learn More' on Plus Plan
    //  Get product data from top horizontal panel
    //  Get plan data from vertical bottom panel in 'Plus Plan' section
    //  Check data from top and bottom panels are the same as data from previous page in 'Plus Plan' section
    Logger.step(5, `Click 'Learn More' in Plus Plan. Check product panel's data, data in bottom panel the same as in on plan's page`)
    await t.click(ProductPage.LOGO_SELECTOR);
    await seeAllProductsButton.click();
    const plusPlan = new PlanPanel(PlanItem.PLUS);
    await plusPlan.learnMoreButtonSelector.click();
    const plusProductPlanData = await ProductPageSteps.getProductData();
    const plusExtendedPlanData = await ProductPageSteps.getExtendedPlanData(PlanItem.PLUS);
    await ProductPageSteps.checkProductData(plusPlanData, plusProductPlanData);
    await ProductPageSteps.checkPlanData(plusPlanData, plusExtendedPlanData);


    //  6 Expand combobox in top horizontal panel
    //  Check costs for more devices and years are more expensive than for lower amount devices and subscription years
    //  Check discount subsciption price for 2 years are cheaper than 2 separate 1-year plans
    Logger.step(6, `Expand combobox. Check prices.`);
    const plusProductPanelCombo = await ProductPageSteps.getComboboxOptionsList(ComboboxSelector.PRODUCT_PANEL_TOP);
    await ProductPageSteps.checkComboboxPrices(plusProductPanelCombo);
    await ProductPageSteps.checkSubscriptionPrices(topPanelCombo);
    

    //  7 Expand combobox in vertical Plan Panel in 'Plus Plan' section
    //  Check that prices in this combobox the same as in combobox from previous, horizontal panel 
    Logger.step(7, `Expand combobox in plan panel. Check items the same as in Product Panel`)
    const plusPanelCombo = await ProductPageSteps.getComboboxOptionsList(ComboboxSelector.PLAN_PANEL_PLUS);
    await ProductPageSteps.checkComboboxesValuesAreTheSame(plusProductPanelCombo, plusPanelCombo);


    //  8 Get features from Standard Plan and from Plus Plan product pages
    //  Check that features provided both plans are different
    Logger.step(8, `Check Plus Plan has more features than Standard plan`);
    await t.click(ProductPage.LOGO_SELECTOR);
    await seeAllProductsButton.click();
    await standardPlan.learnMoreButtonSelector.click();
    const standardFeatureCardsTitleList = await ProductPageSteps.getFeatureCardsTitleList();
    await t.click(ProductPage.LOGO_SELECTOR);
    await seeAllProductsButton.click();
    await plusPlan.learnMoreButtonSelector.click();
    const plusFeatureCardsTitleList = await ProductPageSteps.getFeatureCardsTitleList();
    await ProductPageSteps.checkFeatureCardListsAreDifferent(standardFeatureCardsTitleList, plusFeatureCardsTitleList);
    


    //  9   Click 'Learn More' on Premium Plan
    //  Get product data from top horizontal panel
    //  Get plan data from vertical bottom panel in 'Plus Plan' section
    //  Check data from top and bottom panels are the same as data from previous page in 'Plus Plan' section
    Logger.step(9, `Click 'Learn More' in Premium Plan. Check product panel's data, data in bottom panel the same as in on plan's page`)
    await t.click(ProductPage.LOGO_SELECTOR);
    await seeAllProductsButton.click();
    const premiumPlan = new PlanPanel(PlanItem.PREMIUM);
    await premiumPlan.learnMoreButtonSelector.click();
    const premiumProductPlanData = await ProductPageSteps.getProductData();
    const premiumExtendedPlanData = await ProductPageSteps.getExtendedPlanData(PlanItem.PREMIUM);
    await ProductPageSteps.checkProductData(premiumPlanData, premiumProductPlanData);
    await ProductPageSteps.checkPlanData(premiumPlanData, premiumExtendedPlanData);


    //  10 Get feature blocks from Standard Plan, Plus Plan and Premium Plan product pages
    //  Check that Premium Plan page has unique block with features, that other plans don't have
    Logger.step(10, `Check that Premium Plan has additional unique features block`)
    await t.click(ProductPage.LOGO_SELECTOR);
    await seeAllProductsButton.click();
    await standardPlan.learnMoreButtonSelector.click();
    const standardFeatureBlocksList = await ProductPageSteps.getFeatureBlocksTitleList();
    await t.click(ProductPage.LOGO_SELECTOR);
    await seeAllProductsButton.click();
    await plusPlan.learnMoreButtonSelector.click();
    const plusFeatureBlocksList = await ProductPageSteps.getFeatureBlocksTitleList();
    await t.click(ProductPage.LOGO_SELECTOR);
    await seeAllProductsButton.click();
    await premiumPlan.learnMoreButtonSelector.click();
    const premiumFeatureBlocksList = await ProductPageSteps.getFeatureBlocksTitleList();
    await ProductPageSteps.checkFeatureBlockListsAreDifferent(premiumFeatureBlocksList, standardFeatureBlocksList);
    await ProductPageSteps.checkFeatureBlockListsAreDifferent(premiumFeatureBlocksList, plusFeatureBlocksList);
    
    
    //  11 Expand combobox in top horizontal panel
    //  Check costs for more devices and years are more expensive than for lower amount devices and subscription years
    //  Check discount subsciption price for 2 years are cheaper than 2 separate 1-year plans
    Logger.step(11, `Expand combobox. Check prices.`);
    const premiumProductPanelCombo = await ProductPageSteps.getComboboxOptionsList(ComboboxSelector.PRODUCT_PANEL_TOP);
    await ProductPageSteps.checkComboboxPrices(premiumProductPanelCombo);
    await ProductPageSteps.checkSubscriptionPrices(topPanelCombo);
    

    //  12 Expand combobox in vertical Plan Panel in 'Plus Plan' section 
    //  Check that prices in this combobox the same as in combobox from previous, horizontal panel 
    Logger.step(12, `Expand combobox in Plan Card. Check items the same as in Product Panel`)
    const premiumPanelCombo = await ProductPageSteps.getComboboxOptionsList(ComboboxSelector.PLAN_PANEL_PREMIUM);
    await ProductPageSteps.checkComboboxesValuesAreTheSame(premiumProductPanelCombo, premiumPanelCombo);
});