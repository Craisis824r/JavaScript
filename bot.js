const { Builder, By } = require('selenium-webdriver');
const XLSX = require('xlsx');

(async function bot() {
    // Crear una instancia del controlador de Chrome
    const driver = await new Builder()
        .forBrowser('chrome')
        .build();

    try {
        // Abrir una página web
        await driver.get('https://listado.tucarro.com.co/subaru#D[A:subaru]');
        // await driver.sleep(2000)
        // let pages = driver.findElement(By.css('li[class="andes-pagination__page-count"]')).getText()
        // pages = parseInt(pages.substring(2, 8))
        let amount = 1
        const pages = 7
        const List = []
        let year, km

        while (amount <= pages) {
            await driver.sleep(5000)
            const cars = await driver.findElements(By.css('div.ui-search-result__content-wrapper.shops__result-content-wrapper'));
            for (const car of cars) {

                let Car = await car.findElement(By.css('h2.ui-search-item__title.shops__item-title')).getText();
                let Price = await car.findElement(By.css('span.andes-money-amount__fraction')).getText();
                let Location = await car.findElement(By.css('span.ui-search-item__group__element.ui-search-item__location.shops__items-group-details')).getText();
                await car.findElements(By.css('li.ui-search-card-attributes__attribute')).then((elements) => {
                    elements[0].getText().then((text) => {
                        year = text
                    });
                    elements[1].getText().then((text) => {
                        km = text
                    });
                });
                console.log(year, km)

                // console.log(Car, year, km, Location, Price)
                List.push({ 'Tipo': Car, 'Año': year, 'Km': km, 'Ubicación': Location, 'Precio': Price, });
            }
            if (pages > amount) {
                driver.executeScript("window.scrollTo(0, document.body.scrollHeight)")
                await driver.sleep(2000)
                await driver.findElement(By.linkText('Siguiente')).click()
            }
            amount += 1
        }
        const worksheet = XLSX.utils.json_to_sheet(List);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'CarData');
        XLSX.writeFile(workbook, 'car_data.xlsx');
    } finally {
        driver.sleep(5)
    }
})();