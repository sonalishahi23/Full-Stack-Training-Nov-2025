path= r"C:\Indixpert-nov-Sonali\python-programs\file handling\Student Data Read & Write\student__package\student_data.txt"
def register_student(id,name,course):

    with open(path,"a") as file:
        file.write(f"{id}, {name},{course}")
        print("Student Registered successfully!!")
