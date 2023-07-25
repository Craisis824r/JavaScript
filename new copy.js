function cars(i) {
    let List = []
    let Price = document.querySelectorAll('span.andes-money-amount__fraction')[i].textContent;
    let Car = document.getElementsByClassName('ui-search-item__title shops__item-title')[i].innerText;
    let Location = document.getElementsByClassName('ui-search-item__group__element ui-search-item__location shops__items-group-details')[i].innerText;
    // let Year_Km = document.querySelectorAll('li.ui-search-card-attributes__attribute');
    // let year = Year_Km[0].textContent
    // let km = Year_Km[1].textContent
    // List = {
    //     'Tipo': Car,
    //     // 'Año': year,
    //     // 'Km': km,
    //     'Ubicación': Location,
    //     'Precio': Price
    // }
    List.push(Price, Car, Location)

    window.scrollTo(0, document.body.scrollHeight);
    return List
}


