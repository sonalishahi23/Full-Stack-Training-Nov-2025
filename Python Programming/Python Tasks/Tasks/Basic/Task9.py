import datetime
import json
log_file = "login_log.txt"

def login_user(username,password):
    correct_username = "hello_user"
    correct_password = "12345"
    if username == correct_username and password == correct_password:
        return "Login Successful"
    else:
        return "Invalid Credentials"

try :
    username = input("Enter Username: ")
    password = input("Enter Password: ")
    result = login_user(username, password)
    if result == "Login Successful":
        print(result)
    else:
        print(result)
        log_data = {
            "time": str(datetime.datetime.now()),
            "username": username,
            "error": result,
            "function_name": "login_user"
        }
        with open(log_file, "a") as file:
            file.write(json.dumps(log_data))

except Exception as e:
    log_data = {
            "time": str(datetime.datetime.now()),
            "username": username,
            "error": result,
            "function_name": "login_user"
        }

    print("Something went wrong")

    with open(log_file, "a") as file:
        file.write(json.dumps(log_data) )



