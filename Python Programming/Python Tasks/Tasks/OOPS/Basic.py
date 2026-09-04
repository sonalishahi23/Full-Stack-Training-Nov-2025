class Student:
    def __init__(self):
        self.name=name
        self.id=id
        self.course=course

    def display(self):
        print("Student name: ",self.name)
        print("Student ID: ",self.id)
        print("Student Course name: ",self.course)


name=input("Enter Student Name: ")
id=input("Enter Student ID: ")
course=input("Enter Course name: ")

student1=Student()

student1.display()