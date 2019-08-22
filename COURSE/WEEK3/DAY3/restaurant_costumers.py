
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

        def __init__(self):
            self.order=[]

        def order_dish(self,client,dish):
            self.order.append([client,dish])
            return self.order

        def print_orders(self, client):
            for order in self.order:
                return f" Customer {client} \n Order # {self.order.index(order)} : {order[1]} - {order[1].price}"

        def print_check(self,client):

            total=0
            # this code is just to assure the customer name will be printed only once
            #if len(list(zip(*self.order))[0]) > 0: #zip retrieves the first element accross a lists and returns a list with them
             #   print(f" Customer {client} \n ")
            #end
            #OR just print out the line bc I am passing it as a parameter:
            print(f" Customer {client} \n ")
            for order in self.order:
                if order[0] == client:
                    total += order[1].price
                print( f" Order # {self.order.index(order)} : {order[1]} - {order[1].price}")
            print(f" Total: {total}")

class Ingredients:
    def __init__(self,name, cost):
        self.name=name
        self.cost=cost

cheese = Ingredients('Cheese', 5)
pepperoni = Ingredients('pepperoni', 5)
dough = Ingredients('dough', 5)
pizza = Dish("Pizza", 35, [cheese, pepperoni, dough])
salad = Dish("salad", 35, [cheese, pepperoni, dough])
restaurant= Restaurant()
restaurant.order_dish("Goofy", pizza)
restaurant.order_dish("Goofy", salad)
#print(restaurant.print_orders("Goofy"))
restaurant.print_check("Goofy")
