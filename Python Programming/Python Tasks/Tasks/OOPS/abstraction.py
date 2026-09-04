from abc import ABC, abstractmethod

class Mobile(ABC):
    @abstractmethod
    def camera_quality(self):
        pass

    @abstractmethod
    def storage_space(self):
        pass

    @abstractmethod
    def battery(self):
        pass

    @abstractmethod
    def operating_system(self):
        pass

class Iphone(Mobile):
    def camera_quality(self):
        print("iPhone has 48MP Camera.")
    
    def storage_space(self):
        print("iPhone provides 512GB Storage")
    
    def battery(self):
        print("iPhone has optimized Battery")
    
    def operating_system(self):
        print("iPhone runs on iOS")

class IQOO(Mobile):
    def camera_quality(self):
        print("iqoo has 50MP Camera.")
    
    def storage_space(self):
        print("iqoo provides 256GB Storage")
    
    def battery(self):
        print("iqoo has optimized Battery")
    
    def operating_system(self):
        print("iqoo runs on Android")

class Oneplus(Mobile):
    def camera_quality(self):
        print("oneplus has 50MP Camera.")
    
    def storage_space(self):
        print("oneplus provides 256GB Storage")
    
    def battery(self):
        print("oneplus has fast charging Battery")
    
    def operating_system(self):
        print("oneplus runs on Android")

mobile1=Iphone()
mobile1.camera_quality()
mobile1.storage_space()
mobile1.battery()
mobile1.operating_system()

mobile2=IQOO()
mobile2.camera_quality()
mobile2.storage_space()
mobile2.battery()
mobile2.operating_system()

mobile3=Oneplus()
mobile3.camera_quality()
mobile3.storage_space()
mobile3.battery()
mobile3.operating_system()

