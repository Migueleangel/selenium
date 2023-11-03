const { Browser, Builder, By} = require("selenium-webdriver"); 
const Chrome = require("selenium-webdriver/chrome");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

const start= async () => {
    let driver = null;
    try{
        const chromeOptions = new Chrome.Options();
        //chromeOptions.headless();
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(chromeOptions).build();
        await driver.get("https://www.selenium.dev/selenium/web/web-form.html");

        const textArea = await driver.findElement(By.css('textarea[name="my-textarea"]'));
        await textArea.sendKeys("anita lava la tina.");
        await delay(2000);

        const select = await driver.findElement(By.css('select.form-select[name="my-select"]'));
        const three = await driver.findElement(By.css('option[value="3"]'));
        await three.click();
        await delay(2000);

        const color = await driver.findElement(By.css('input[name="my-colors"]'));
        await color.sendKeys("#20a722"); 
        await delay(2000);

        const date = await driver.findElement(By.css('input[name="my-date"]'));
        await date.sendKeys("08/16/1970"); 
        await delay(2000);

        const checkbox = await driver.findElement(By.id('my-check-2'));
        await checkbox.click();
        await delay(2000);

        const submit = await driver.findElement(By.css('button[type="submit"]'));
        await submit.click();

        const titleElement = await driver.findElement(By.css('h1.display-6'));
        const titleText = await titleElement.getText();
        console .log(titleText);

        const textResult = await driver.findElement(By.id("message"));
        const textValue = await textResult.getText();
        console.log(textValue);
    } catch (error) {
        console.error(error);

    }finally{
        if (driver){
            //await driver.quit();
        }
    }
}


start();