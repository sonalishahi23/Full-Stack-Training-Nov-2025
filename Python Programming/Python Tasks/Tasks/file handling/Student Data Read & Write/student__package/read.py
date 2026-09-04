
path= r"C:\Indixpert-nov-Sonali\python-programs\file handling\Student Data Read & Write\student__package\student_data.txt"


def read_student_data():
    with open(path,"r") as file:
        data = file.read()
        print(data)