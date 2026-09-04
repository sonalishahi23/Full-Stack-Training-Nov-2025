def name_validation():
    while True:
        name = input("Enter Student Name: ")
        if name.replace(" ", "").isalpha():
            return name
        else:
            print("Invalid Name! Only alphabets and spaces are allowed.")