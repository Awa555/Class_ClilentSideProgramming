function filterMenu(menu) {
    const menuNode = document.querySelector('#menu');
    const vegetarianOption = menu.filter(
        (Option) => Option.isVegetarian === true
    );
    vegetarianOption.forEach((Option) => {
        let dish = document.createElement("li");
        dish.textContent = Option.name + ".Price =  " + Option.price.toFixed(2);
        menuNode.appendChild(dish);
    });
}

// function calcVegetarian () {
//     if
// }



filterMenu([
    {
        name: "11",
        isVegetarian: false,
        price: 2.00
    },

    {
        name: "12",
        isVegetarian: false,
        price: 2.00
    },

    {
        name: "13",
        isVegetarian: false,
        price: 2.00
    },
])