import json
import os

filename = "students.json"
def read_data():
    if not os.path.exists(filename):
        with open(filename, "w") as file:
           json.dump([], file)


    with open(filename, "r") as file:
           return json.load(file) 

def write_data(data):
    with open(filename, "w") as file:
        json.dump(data, file, indent=4)
