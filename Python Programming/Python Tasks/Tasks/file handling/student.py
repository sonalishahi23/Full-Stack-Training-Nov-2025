with open("student.txt","w")as file:
    name=input("Enter Your Name: ")
    roll_number=input("Enter Your Roll Number: ")
    file.write(f"Name: {name}\n")
    file.write(f"Roll Number: {roll_number}")
    print("student.txt file created successfully!")

with open("student.txt","r")as file:
    data=file.read()
    print (data)

with open("student.txt","a") as file:
    course = input("Enter Your Course Name: ")
    file.write(f"Course: {course}\n")

print("Course added successfully!")