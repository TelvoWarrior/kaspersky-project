import { Selector, t } from "testcafe";
import { ProductDataValue } from "../entities/product-data-value";
import { PlanItem } from "../enums/plan-item";
import { ProductPage } from "../pages/product-page";
import { ComboboxOptionsList } from "../entities/combobox-option-value";
import { ComboboxSelector } from "../entities/combobox-selector";
import { Logger } from "testcafe-reporter-acd-html-reporter/lib/Logger";
import { ProductPanel } from "../panels/product-panel";

export class ProductPageStepsImpl extends ProductPage {

    // Product panel section
    private async getProductTitle() {
        return await new ProductPanel().productTitleSelector.innerText;
    }

    private async getReviewsCount() {
        const productPanel = new ProductPanel();
        return parseInt(await productPanel.reviewsCountSelector.innerText);
    }

    private async getPrice() {
        const productPanel = new ProductPanel();
        return parseFloat((await productPanel.priceSelector.innerText).slice(1));
    }

    async getProductData() {
        const title = await this.getProductTitle();
        const reviews = await this.getReviewsCount();
        const price = await this.getPrice();
        return new ProductDataValue(title, reviews, null, price);
    }

    async getComboboxOptionsList(combobox: ComboboxSelector) {
        await t.click(combobox as Selector);

        const optionSelector = Selector(`div[role="option"]`);
        const optionsCount = await optionSelector.count;
        const optionsList: ComboboxOptionsList[] = [];

        for (let i = 0; i < optionsCount; i++) {
            const currentOptionSelector = optionSelector.nth(i);
            const pack = parseInt(await currentOptionSelector.find(`span[class*="PlanSelect_pack"]`).innerText);
            const term = parseInt(await currentOptionSelector.find(`span[class*="PlanSelect_term"]`).innerText);
            const price = parseFloat((await currentOptionSelector.find(`span[class*="PlanSelect_price"]`).innerText).slice(1));
            const optionValue = new ComboboxOptionsList(pack, term, price);
            optionsList.push(optionValue);
        }

        return optionsList;
    }

    //Feature blocks and cards section
    async getFeatureCardsTitleList() {
        const page = new ProductPage();
        const cardSelector = page.featureCardTitleSelector
        const featureCardsCount = await cardSelector.count;
        const featureCardsTitleList: string[] = [];

        for (let i = 0; i < featureCardsCount; i++) {
            featureCardsTitleList.push(await cardSelector.nth(i).innerText);
        }

        return featureCardsTitleList;
    }

    async checkFeatureCardListsAreDifferent(firstFeatureBlockList: string[], secondFeatureBlockList: string[]) {
        Logger.info(`Check list: \n${firstFeatureBlockList}\nand list: \n${secondFeatureBlockList}\nhave different features`)
        await t.expect(firstFeatureBlockList.sort().join() !== secondFeatureBlockList.sort().join()).ok(`Check list: \n${firstFeatureBlockList}\nand list: \n${secondFeatureBlockList}\n have different features`);
    }

    private async getFeatureBlocksCount() {
        const page = new ProductPage();
        return await page.featureBlockSelector.count;
    }

    private async getFeatureBlockTitleByBlockIndex(index: number) {
        const page = new ProductPage();
        return await page.featureBlockTitleSelector.nth(index).innerText;
    }

    async getFeatureBlocksTitleList() {
        const titlesCount = await this.getFeatureBlocksCount();
        const titlesList: string[] = [];
        for (let i = 0; i < titlesCount; i++) {
            const currentTitle = await this.getFeatureBlockTitleByBlockIndex(i);
            titlesList.push(currentTitle);
        }
        return titlesList;
    }

    async checkFeatureBlockListsAreDifferent(firstFeatureBlockList: string[], secondFeatureBlockList: string[]) {
        Logger.info(`Check list: \n${firstFeatureBlockList}\nand list: \n${secondFeatureBlockList}\nhave different features`)
        await t.expect(firstFeatureBlockList.sort().join() !== secondFeatureBlockList.sort().join()).ok(`Check list: \n${firstFeatureBlockList}\nand list: \n${secondFeatureBlockList}\n have different features`);
    }

    //Plan panels section
    private async getExtendedProductTitle(plan: PlanItem) {
        const planPanel = this.getPlanSelector(plan);
        return await planPanel.productTitleSelector.innerText;
    }

    private async getExtendedReviewsCount(plan: PlanItem) {
        const planPanel = this.getPlanSelector(plan);
        return parseInt(await planPanel.reviewsCountSelector.innerText);
    }

    private async getExtendedFeaturesList(plan: PlanItem) {
        const planPanel = this.getPlanSelector(plan);
        const featuresCount = await planPanel.featureSelector.count;
        const featuresList: string[] = [];
        for (let i = 0; i < featuresCount; i++) {
            const currentFeature = await planPanel.featureSelector.nth(i).innerText;
            featuresList.push(currentFeature);
        }
        return featuresList;
    }

    private async getExtendedFromPrice(plan: PlanItem) {
        const planPanel = this.getPlanSelector(plan);
        return parseFloat(await (planPanel.fromPriceSelector.getAttribute(`data-at-price`)));
    }

    async getExtendedPlanData(plan: PlanItem) {
        const title = await this.getExtendedProductTitle(plan);
        const reviews = await this.getExtendedReviewsCount(plan);
        const features = await this.getExtendedFeaturesList(plan);
        const price = await this.getExtendedFromPrice(plan);
        return new ProductDataValue(title, reviews, features, price);
    }

    async checkPlanData(initialPlanData: ProductDataValue, comparisonData: ProductDataValue) {
        await t.expect(initialPlanData.title === comparisonData.title).ok(`Check initial data title ${initialPlanData.title} and comparison ${comparisonData.title} are the same`);
        await t.expect(initialPlanData.reviews === comparisonData.reviews).ok(`Check initial data reviews ${initialPlanData.reviews} and comparison ${comparisonData.reviews} are the same`);
        await t.expect(initialPlanData.features.sort().join() === comparisonData.features.sort().join()).ok(`Check initial data features ${initialPlanData.features} and comparison ${comparisonData.features} are the same`);
        await t.expect(initialPlanData.price === comparisonData.price).ok(`Check initial data price ${initialPlanData.price} and comparison ${comparisonData.price} are the same`);
    }

    async checkProductData(initialPlanData: ProductDataValue, comparisonData: ProductDataValue) {
        await t.expect(initialPlanData.title === comparisonData.title).ok(`Check initial data title ${initialPlanData.title} and comparison ${comparisonData.title} are the same`);
        await t.expect(initialPlanData.reviews === comparisonData.reviews).ok(`Check initial data reviews ${initialPlanData.reviews} and comparison ${comparisonData.reviews} are the same`);
        await t.expect(initialPlanData.price === comparisonData.price).ok(`Check initial data price ${initialPlanData.price} and comparison ${comparisonData.price} are the same`);
    }

    async checkComboboxPrices(comboboxOptionsList: ComboboxOptionsList[]) {
        const length = comboboxOptionsList.length;
        let prevPrice = 0;
        for (let i = 1; i < length; i++) {
            if (prevPrice === 0) {
                Logger.info(`Check price ${comboboxOptionsList[prevPrice].price} for ${comboboxOptionsList[prevPrice].devicesCount} device and ${comboboxOptionsList[prevPrice].subscriptionTerm} year subscription plan is greater than 0`)
                await t.expect(comboboxOptionsList[i].price > comboboxOptionsList[prevPrice].price)
                    .ok(`Check price ${comboboxOptionsList[i].price} for ${comboboxOptionsList[i].devicesCount} device and ${comboboxOptionsList[i].subscriptionTerm} year subscription plan is is > 0`);
            }
            Logger.info(`Check price ${comboboxOptionsList[i].price} for ${comboboxOptionsList[i].devicesCount} device and ${comboboxOptionsList[i].subscriptionTerm} year subscription plan is greater than price ${comboboxOptionsList[prevPrice].price} for ${comboboxOptionsList[prevPrice].devicesCount} device and ${comboboxOptionsList[prevPrice].subscriptionTerm} year subscription plan`)
            await t.expect(comboboxOptionsList[i].price > comboboxOptionsList[prevPrice].price)
                .ok(`Check price ${comboboxOptionsList[i].price} for ${comboboxOptionsList[i].devicesCount} device and ${comboboxOptionsList[i].subscriptionTerm} year subscription plan is greater than price ${comboboxOptionsList[prevPrice].price} for ${comboboxOptionsList[prevPrice].devicesCount} device and ${comboboxOptionsList[prevPrice].subscriptionTerm} year`);
            prevPrice = i;
        }
    }

    async checkSubscriptionPrices(comboboxOptionsList: ComboboxOptionsList[]) {
        for (let i = 0; i < comboboxOptionsList.length / 2; i++) {
            const priceForOneYear = comboboxOptionsList[i].price;
            const priceForTwoYears = priceForOneYear*2;
            const discountPriceForTwoYears = comboboxOptionsList[i+3].price;
            await t.expect(priceForTwoYears > discountPriceForTwoYears).ok(`Check discount price for 2 years ${discountPriceForTwoYears} is less than buying 2 separate subscriptions for 1 year ${priceForOneYear}`);
        }
    }

    async checkComboboxesValuesAreTheSame(firstCombo: ComboboxOptionsList[], secondCombo: ComboboxOptionsList[]) {
        const firstComboLength = firstCombo.length;
        const secondComboLength = secondCombo.length;
        Logger.info(`Check combobox options count are the same`);
        await t.expect(firstComboLength === secondComboLength).ok(`Check first combobox options count ${firstComboLength} the same as in second ${secondComboLength}`);
        for (let i = 0; i < firstComboLength; i++) {
            Logger.info(`Check combobox values are the same`);
            await t.expect(firstCombo[i].devicesCount === secondCombo[i].devicesCount).ok(`Check devices count`);
            await t.expect(firstCombo[i].subscriptionTerm === secondCombo[i].subscriptionTerm).ok(`Check subscription term`);
            await t.expect(firstCombo[i].price === secondCombo[i].price).ok(`Check price`);
        }
    }
}

export const ProductPageSteps = new ProductPageStepsImpl();