class Dish {
    constructor(dish, price, ingredients) {
        this.dish = dish
        this.ingredients = ingredients
        this.price = price
    }

    cost() {
        let total = 10
        for (let i = 0; i < this.ingredients.length; i++) {
            total += this.ingredients[i].cost
        }
        return total
    }

    profit() {
        return this.price - this.cost()

    }

}
class Restaurant {
    constructor(orders, client) {
        this.orders = {}
    }

    orderDish(dish, client) {

        if (this.orders[client.id]) //if this exists - ie if there is already an order in
        { return this.orders[client.id].push(dish) }
        else { return this.orders[client.id] = [dish] }

    }

    printOrders() {
        for (let i = 0; i < this.orders.length; i++) {
            console.log("Order # " + i + " : " + this.orders[i])


        }
    }

    check(client) {
        console.log(client.name)
        let sum = 0
<<<<<<< HEAD
        // const clientOrdersArray = this.orders[client.id];     // Array of dishes for the client with id 2
        for (let i = 0; i < this.orders[client.id].length; i++) {
            console.log(this.orders)
            console.log(client.id)

            // sum += clientOrder[i].price
            sum += this.orders[client.id][i].price

            console.log("Order # " + i + " : " + this.orders[client.id][i].dish + "-" +
                this.orders[client.id][i].price)
=======
        for (let i = 0; i < this.orders[client.id].length; i++) {
            sum += this.orders[client.id][i].price

            console.log("Order # " + i + " : " + this.orders[client.id][i].dish + "-" +
                this.orders[client.id][i].price)
>>>>>>> 1c85b6462f4d4a25ef3ff10c42f5314dc087c2b0
        }
        console.log("Total: " + sum)

    }

}



class Ingredient {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }


}

const restaurant = new Restaurant();

const cheese = new Ingredient("Cheese", 5);
const pepperoni = new Ingredient("pepperoni", 6)
const dough = new Ingredient("dough", 6)
const lettuce = new Ingredient("lettuce", 6)
const tomato = new Ingredient("tomato", 6)


const pizza = new Dish('Pizza', 35, [cheese, pepperoni, dough]);
const salad = new Dish('Salad', 30, [lettuce, cheese, tomato]);

const pluto = {
    name: 'Pluto',
    id: 1
};
const goofy = {
    name: 'Goofy',
    id: 2
};

//console.log(pizza.profit())

//console.log(pizza.cost());
//restaurant.orderDish(pizza);
//restaurant.orderDish(salad);

//restaurant.printOrders()
//console.log(restaurant.check(pluto))


restaurant.orderDish(pizza, goofy)
<<<<<<< HEAD

=======
>>>>>>> 1c85b6462f4d4a25ef3ff10c42f5314dc087c2b0
restaurant.check(goofy);
restaurant.orderDish(pizza, pluto);
restaurant.orderDish(salad, pluto);
restaurant.check(pluto);
