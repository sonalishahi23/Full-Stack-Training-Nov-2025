class Water:
    def form(self):
        print("Water has different forms")

class Ice(Water):
    def form(self):
        print("ICE is a Solid State of Water.")

class Liquid(Water):
    def form(self):
        print("Water is the Liquid State")

class Steam(Water):
    def form(self):
        print("Steam is the gas state of Water")

ice=Ice()
ice.form()

liquid=Liquid()
liquid.form()

steam=Steam()
steam.form()