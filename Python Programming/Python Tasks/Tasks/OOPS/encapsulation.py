class Amazon:
    def __init__(self,name,price,total_quantity):
        self.name=name
        self.price=price
        self.__total_quantity=total_quantity

    def buy(self,order_quantity):
        if order_quantity<=self.__total_quantity:
            self.__total_quantity-=order_quantity
            print("Order placed successfully")
            print("Remaining stock:",self.__total_quantity)
        else:
            print("Not enough stock")

    def show_product(self):
        print("Product name: ",self.name)
        print("Product Price: ",self.price)

product=Amazon("Shirt","999",100)
product1=Amazon("Watch","1000",200)

product.show_product()

product.__total_quantity=500

product.buy(5)
product1.show_product()
product1.__total_quantity=300
product1.buy(3)







