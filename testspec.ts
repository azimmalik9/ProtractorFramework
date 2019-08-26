import {browser, by, element} from "protractor";
import {calculator} from "./pageObjects/calculator";
import {angularHomePage} from "./pageObjects/angularHomePage";

describe("Chain locators demo", ()=>{
    it("Open Angular js website", async ()=>  {
        let page = new calculator();
        await    browser.get('http://juliemr.github.io/protractor-demo/');
        await    page.firstEditBox.sendKeys("3");
        await    page.secondEditBox.sendKeys("5");
        await   page.go.click();
        page.getResult.getText().then(function (text)
        {
            console.log(text);
        });
    });

    it('Angular home page title validation', async ()=>{

        let ah = new angularHomePage();
        await   browser.get("https://angularjs.org/");
        await ah.angularLink.click();
        await browser.sleep(3000);
        await ah.search.sendKeys("hello");

    });

});
