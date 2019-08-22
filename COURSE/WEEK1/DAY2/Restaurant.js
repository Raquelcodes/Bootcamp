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
        this.orders = []
    }

    orderDish(dish) {
        this.orders.push(dish)



        //client.dishes = [dish]

    }

    printOrders() {
        for (let i = 0; i < this.orders.length; i++) {
            console.log("Order # " + i + " : " + this.orders[i])


        }
    }

    check(client) {
        this.clients = client
        console.log(this.clients.name)
        let sum = 0
        for (let i = 0; i < this.orders.length; i++) {
            /* for (let j = 0; j < this.orders[i].ingredients.length; j++) {
                 let sum = 0
                 sum += this.orders[i].ingredients[j].cost
                 let total = 10
                 total += sum
 */
            sum += this.orders[i].price

            console.log("Order # " + i + " : " + this.orders[i].dish + "-" +
                this.orders[i].price)
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


restaurant.orderDish(pizza, goofy);
restaurant.check(goofy);
restaurant.orderDish(pizza, pluto);
restaurant.orderDish(salad, pluto);
restaurant.check(pluto);
