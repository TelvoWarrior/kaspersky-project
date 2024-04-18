import { Selector } from "testcafe";
import { Button } from "../elements/button";

export class MainPage {
    private _seeAllProductsButton = new Button(Selector(`span[class*="Common_content"]`).withText(`See All Products`), `See All Products`);

    get seeAllProductsButton() {
        return this._seeAllProductsButton;
    }
}