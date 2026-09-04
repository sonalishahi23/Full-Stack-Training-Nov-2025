from student__package import write
from student__package import read

while True:
    print("Student Menu")
    print("1. Register Student")
    print("2. Display Students")
    print("3. Exit")

    choice = input("Enter Choice: ")

    if choice == "1":
        id = input("Enter ID: ")
        name = input("Enter Name: ")
        course = input("Enter Course: ")

        write.register_student(id, name, course)

    elif choice == "2":
        read.read_student_data()

    elif choice == "3":
        print("Thank You!")
        break

    else:
        print("Invalid Choice")