
class Dish:
    def __init__(self,name, price, ingredients):
        self.name=name
        self.price=price
        self.ingredients = ingredients

    def cost(self):
        cost=10
        for x in self.ingredients:
            cost+=x.cost
        return cost

    def profit(self):
        profit= self.price - self.cost()
        return profit



    def __str__(self):
        return self.name




class Restaurant:

        def __init__(self, order):
            self.order=[]


        def order_dish(self,dish):
            self.order.append(dish)

        def print_orders(self):
            for dish in self.order:
                return f" Order # {self.order.index(dish)} : {dish}"


        def print_check(self):
            total=0
            for dish in self.order:
                total += dish.price
                return f" Order # {self.order.index(dish)} : {dish} - {dish.price} \n Total: {total}"


class Ingredients:
    def __init__(self,name, cost):
        self.name=name
        self.cost=cost



cheese = Ingredients('Cheese', 5)
pepperoni = Ingredients('pepperoni', 5)
dough = Ingredients('dough', 5)

#salad = Dish('Salad')
#print(pizza.name)
pizza = Dish("Pizza", 35, [cheese, pepperoni, dough])
restaurant= Restaurant(pizza )
print(restaurant.order_dish(pizza))
restaurant.print_orders()
#restaurant.order_dish(salad)
#restaurant.print_orders()

#print(cheese.name)

#print(pizza.ingredients) #not printing out the ingredient array-why?

#print(pizza.cost())


#print(pizza.profit()) # => 8
print(restaurant.print_check())
