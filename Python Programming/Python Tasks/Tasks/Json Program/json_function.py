import json
Student={
    "name" : input("Enter Your Name: "),
    "id" : int(input("Enter Student Id: ")),
    "course" : input("Enter Your Course: ")
}
with open("data.json","w") as file:
    
    json.dump(Student, file,indent=4)
    

json_string=json.dumps(Student,indent=4)
print(json_string)


with open("data.json","r") as file:
    student=json.load(file)
    print(student)

python_object=json.loads(json_string)
print(python_object)