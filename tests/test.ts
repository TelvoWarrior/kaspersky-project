import { Selector, t } from "testcafe";
import { TEST_URL } from "../test-data/configuration";
import { Logger } from "testcafe-reporter-acd-html-reporter/lib/Logger";

fixture(`Onliner Project`)
    .page(TEST_URL);

test(``, async () => {
    await t.maximizeWindow();

    Logger.step(1, `First step`)
    const closeButtonSelector = Selector(`button[data-at-selector*="close"]`).nth(2);
    const seeAllProductsButtonSelector = Selector(`a[href*="home-security"][data-at-selector="default-button"]`);
    const comboBox = Selector(`table[class*="ComparisonTable"]`).find(`div[data-at-selector="buy-block"]`).nth(0).find(`span[data-at-selector="select-value-option-0"]`)
    
    enum BuyingOptions {
        ONE_DEVICE_ONE_YEAR = `0`,
        THREE_DEVICES_ONE_YEAR = `1`,
        FIVE_DEVICES_ONE_YEAR = `2`,
        ONE_DEVICE_TWO_YEARS = `3`,
        THREE_DEVICEC_TWO_YEARS = `4`,
        FIVE_DEVICE_TWO_YEARS = `5`,
    } 


    await t.click(closeButtonSelector);
    await t.click(seeAllProductsButtonSelector);
    let listItemCount = await Selector(`div[class*="OpenBuyBlockColumn_columnWrapper"]`).nth(0).find(`li[class*="ListItem"]`).count;
    console.log(`listItemCount?: ${listItemCount}`);
    for (let i = 0; i < listItemCount; i++) {
        let listItemInnerText = await Selector(`div[class*="OpenBuyBlockColumn_columnWrapper"]`).nth(0).find(`li[class*="ListItem"]`).nth(i).innerText;
        console.log(`index: ${i}, number: ${listItemInnerText}, length: ${listItemInnerText.length}`);
    }
    await t.click(Selector(`div[class*="OpenBuyBlockColumn_columnWrapper"]`).nth(0).find(`span`).withText(`Learn More`));
    await t.debug();
    await t.click(Selector(`table[class*="ComparisonTable"]`).find(`div[data-at-selector="buy-block"]`).nth(0).find(`span[data-at-selector="select-value-option-0"]`));
    await t.hover(Selector(`span[data-at-selector="select-value-option-1"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-2"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-3"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-4"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-5"]`));
    await t.wait(1000);
    await t.click(Selector(`table[class*="ComparisonTable"]`).find(`div[data-at-selector="buy-block"]`).nth(1).find(`span[data-at-selector="select-value-option-0"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-1"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-2"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-3"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-4"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-5"]`));
    await t.wait(1000);
    await t.click(Selector(`table[class*="ComparisonTable"]`).find(`div[data-at-selector="buy-block"]`).nth(2).find(`span[data-at-selector="select-value-option-0"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-1"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-2"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-3"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-4"]`));
    await t.wait(1000);
    await t.hover(Selector(`span[data-at-selector="select-value-option-5"]`));
    await t.wait(1000);
    const getPrice0 = Selector(`table[class*="ComparisonTable"]`).find(`div[data-at-selector="buy-block"]`).nth(0).find(`div[data-at-price]`).nth(1);
    const getPrice1 = Selector(`table[class*="ComparisonTable"]`).find(`div[data-at-selector="buy-block"]`).nth(1).find(`div[data-at-price]`).nth(1);
    const getPrice2 = Selector(`table[class*="ComparisonTable"]`).find(`div[data-at-selector="buy-block"]`).nth(2).find(`div[data-at-price]`).nth(1);
    console.log(`${await getPrice0.getAttribute(`data-at-price`)}`);
    console.log(`${await getPrice1.getAttribute(`data-at-price`)}`);
    console.log(`${await getPrice2.getAttribute(`data-at-price`)}`);
    await t.click(Selector(`table[class*="ComparisonTable"]`).find(`div[data-at-selector="buy-block"]`).nth(0).find(`span[data-at-selector="select-value-option-0"]`));
    await t.wait(1000);
    await t.click(Selector(`span[data-at-selector="select-value-option-5"]`));
    let value = await getDataAtPriceValue(getPrice0)
    let newValue = parseFloat(value)
    console.log(`Value: ${value}`)
    console.log(`Value type: ${typeof value}`)
    console.log(`New Value: ${newValue}`)
    console.log(`New Value type: ${typeof newValue}`)
    await t.debug();
});

function getDataAtPriceValue(selector:Selector) {
    return selector.getAttribute(`data-at-price`)
}

 