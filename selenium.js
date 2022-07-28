const chrome = require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

async function run() {
    //INICIA CHROME CRIVER
    let driver = new Builder().forBrowser('chrome').build();

    await driver.get('https://google.com')
    await driver.sleep(1000);
    const searchBar = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input'))
    await searchBar.sendKeys("Helder");
    await searchBar.sendKeys(Key.ENTER);
    await driver.sleep(1000);

    await driver.wait(until.elementLocated(By.id('result-stats')), 10000);
    //await driver.findElement(By.xpath('//*[@id="result-stats"]/text()')).getText().then(function (text) {
    await driver.findElement(By.id('result-stats')).getText().then(function (text) {
         //if (text === 'Helder') {
        console.log(text);
    });

    
}

run().then(_ => console.log('Teste completo.'), e => console.error('FAILURE: ' + e));;