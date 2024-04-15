import { BaseElement } from "../elements/base-element";

export class CommonStepsImpl {
    async hover(item:BaseElement) {
        await item.hover();
    }
    async click(item:BaseElement) {
        await item.click();
    }
}

export const CommonSteps = new CommonStepsImpl();