import datetime
import json
log_file="day_log.txt"
days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

try:
  
    choice=int(input("Enter any Number(1-7): "))
    print("The Day is ",days[choice])
    log_data={
        "time": str(datetime.datetime.now()),
        "choice":str(choice),
        
    }

except Exception as e:
    print("Number Should contain 1 to 7 value")
    log_data={
        "time": str(datetime.datetime.now()),
        "choice":str(choice),
        "error": str(e)
    }
with open(log_file,"w") as file:
    file.write(json.dumps(log_data))