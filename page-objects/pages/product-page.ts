import { Selector } from "testcafe";

export class ProductPage {
    private _featureBlockSelector = Selector(`div[class*="FeatureInfoGrid_cardsContent"]`);
    private _featureBlockTitleSelector = this._featureBlockSelector.find(`h4`);
    private _featureCardSelector = Selector(`div[class*="PaperLight_root"]`);
    private _featureCardHeaderSelector = this._featureCardSelector.find(`h5`);

    get featureBlockSelector() {
        return this._featureBlockSelector;
    }

    get featureBlockTitleSelector() {
        return this._featureBlockTitleSelector;
    }

    get featureCardSelector() {
        return this._featureCardSelector;
    }

    get featureCardHeaderSelector() {
        return this._featureCardHeaderSelector;
    }

    async getFeatureBlocksCount() {
        const page = new ProductPage();
        return await page.featureBlockSelector.count;
    }

    async getFeatureBlockTitleByBlockIndex(index: number) {
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

    async getFeatureCardsCount(){
        const page = new ProductPage();
        return await page.featureCardSelector.count;
    }

    async getFeatureCardTitleByCardIndex(index: number) {
        const page = new ProductPage();
        return await page.featureCardHeaderSelector.nth(index).innerText;
    }

    async getFeatureCardsTitleList() {
        const titlesCount = await this.getFeatureCardsCount();
        const titlesList: string[] = [];
        for (let i = 0; i < titlesCount; i++) {
            const currentTitle = await this.getFeatureCardTitleByCardIndex(i);
            titlesList.push(currentTitle);
        }
        return titlesList;
    }
}