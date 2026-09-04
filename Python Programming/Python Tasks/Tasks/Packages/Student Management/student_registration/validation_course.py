def course_validation():
    while True:
        course = input("Enter Course Name: ")
        if course.replace(" ", "").isalpha():
            return course
        else:
            print("Invalid Course! Only alphabets and spaces allowed.")