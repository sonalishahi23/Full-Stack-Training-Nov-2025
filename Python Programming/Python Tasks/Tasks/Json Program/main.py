from registration import read_data
from registration import write_data

student = {
    "name": input("Enter Name: "),
    "id": int(input("Enter ID: ")),
    "course": input("Enter Course: ")
}

data = read_data()

data.append(student)

write_data(data)

print(read_data())