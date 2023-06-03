var pizza = {
    type: "deep dish",
    sauce: "traditional", 
    cheese: "mozzarella",
    toppings: ["pepporoni", "sausage"]
};

console.log (pizza)

function pizzaOven(type, sauce, cheese, toppings) {
    var pizza = {};
    pizza.type = type;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("hand tossed", "marina", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p1);

var p2 = pizzaOven("mini pizza", "tomato sauce", "cheddar", ["sausages", "olives"]);
console.log(p2);

var p3 = pizzaOven("fruit pizza", "yogurt", "cream cheese", ["kiwis", "blueberries", "strawberries", "oranges"]);
console.log(p3);

