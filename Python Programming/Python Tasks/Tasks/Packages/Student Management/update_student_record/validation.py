def name_validation():
    while True:
        name = input("Enter Student New Name: ")
        if name.replace(" ", "").isalpha():
            return name
        else:
            print("Invalid Name! Only alphabets and spaces are allowed.")


def course_validation():
    while True:
        course = input("Enter New Course Name: ")
        if course.replace(" ", "").isalpha():
            return course
        else:
            print("Invalid Course! Only alphabets and spaces allowed.")


def email_validation():
    while True:
        email = input("Enter New Email: ")
        if email.endswith("@gmail.com"):
            return email
        else:
            print("Invalid Email! Only gmail.com allowed.")

def validate_update_id(update_id):

    if update_id.isdigit() and len(update_id) == 14:
        return True
    else:
        print("Invalid ID!")
        return False