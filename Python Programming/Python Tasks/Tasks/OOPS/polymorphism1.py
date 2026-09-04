class FoodOrder:
    def prepare(self):
        print("Preparing your food...")

class Pizza(FoodOrder):
    def prepare(self):
        print(" Baking a Pizza")

class Burger(FoodOrder):
    def prepare(self):
        print(" Grilling a Burger")

class Pasta(FoodOrder):
    def prepare(self):
        print(" Cooking Pasta ")

pizza=Pizza()
pizza.prepare()

burger=Burger()
burger.prepare()

pasta=Pasta()
pasta.prepare()

