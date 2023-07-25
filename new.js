function cars() {

    const elements = document.querySelectorAll('div.ui-search-result__content-wrapper.shops__result-content-wrapper');

    let Price, Car, Location, Year_Km, year, km, List = [];

    for (const element of elements) {
        Price = element.querySelector('span.andes-money-amount__fraction').innerText;
        Car = element.querySelector('h2.ui-search-item__title.shops__item-title').innerText;
        Location = element.querySelector('span.ui-search-item__group__element.ui-search-item__location.shops__items-group-details').innerText;
        Year_Km = element.querySelectorAll('li.ui-search-card-attributes__attribute');
        if (Year_Km.length === 2) {
            year = Year_Km[0].innerText
            km = Year_Km[1].innerText
        } else {
            year = Year_Km[0].innerText
            km = 'No aplica'
        }

        List.push({ 'Tipo': Car, 'Año': year, 'Km': km, 'Ubicación': Location, 'Precio': Price });
    }

    window.scrollTo(0, document.body.scrollHeight);

    return List
}