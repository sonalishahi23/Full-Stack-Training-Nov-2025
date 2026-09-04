import requests
import json

class User:
    def __init__(self,data):
        self.data = data

    def display(self):
        print(json.dumps(self.data, indent=4))

output=requests.get("https://jsonplaceholder.typicode.com/comments")
data=output.json()
user_email = input("Please enter email: ")
found = False

for item in data:

    if item["email"] == user_email:
        print("Data Matched: ")
        u = User(item)   
        u.display()
        found = True
        break

if not found:
    print("Data not found")