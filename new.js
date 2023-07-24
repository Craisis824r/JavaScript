function cars() {

    // while (amount <= pages) {
    const elements = document.querySelectorAll('div.ui-search-result__content-wrapper.shops__result-content-wrapper');
    // const Element_List = {};
    let List = {}

    for (const element of elements) {
        let Price = element.querySelector('span.andes-money-amount__fraction').innerText;
        let Car = element.querySelector('h2.ui-search-item__title.shops__item-title').innerText;
        let Location = element.querySelector('span.ui-search-item__group__element.ui-search-item__location.shops__items-group-details').innerText;
        let Year_Km = element.querySelectorAll('li.ui-search-card-attributes__attribute');
        let year = Year_Km[0].innerText
        let km = Year_Km[1].innerText

        // List.push({ 'Tipo': Car, 'Año': year, 'Km': km, 'Ubicación': Location, 'Precio': Price, });
        // List.push(Car, year, km, Location, Price);
        List = {
            'Tipo': Car,
            'Año': year,
            'Km': km,
            'Ubicación': Location,
            'Precio': Price
        }
    }

    window.scrollTo(0, document.body.scrollHeight);
    // Element_List['Carros'] = List;
    // return Element_List;
    return List
}
// }

