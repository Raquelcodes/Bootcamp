

orders = [

    {
        'id': 'order_001',
        'item': 'Introduction to Python',
        'quantity': 1,
        'price_per_item': 32,
    },
    {
        'id': 'order_002',
        'item': 'Advanced Python',
        'quantity': 3,
        'price_per_item': 40,
    },
    {
        'id': 'order_003',
        'item': 'Python web frameworks',
        'quantity': 2,
        'price_per_item': 51,
    },
]




def compute_totals(orders):
    totals = []
    for order in orders:

        #print(order) --to chekc it accesses the orders

        if order["quantity"]* order["price_per_item"] <100:
            order["total"]=order["quantity"]* order["price_per_item"] +10
            totals.append({order["id"], order["total"]})
        else:
            order["total"] = order["quantity"] * order["price_per_item"]
            totals.append({order["id"], order["total"]})
    return totals

print(compute_totals(orders))

