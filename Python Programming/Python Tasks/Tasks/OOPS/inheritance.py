class Amazon:
    def __init__(self,name,price,color):
        self.name=name
        self.price=price
        self.color=color

    def show_details(self):
        print("Name Of the Product: ",self.name)
        print("Price Of the product: ",self.price)
        print("Color of Product: ",self.color)

class laptop(Amazon):
    RAM="8GB"
    def ram_memory(self):
        print("RAM : ",self.RAM)

class Shoes(Amazon):
    Size="7"
    def shoe_size(self):
        print("Size is ",self.Size)

class clothes(Amazon):
    Brand="Zara"
    def brand_name(self):
        print("Brand Name is ",self.Brand)

object1=laptop("Dell Laptop", 50000, "Silver")
object2=Shoes("Nike Shoes", 1200, "Black")
object3=clothes("T-Shirt", 800, "Blue")

object1.show_details()
object1.ram_memory()

object2.show_details()
object2.shoe_size()

object3.show_details()
object3.brand_name()
