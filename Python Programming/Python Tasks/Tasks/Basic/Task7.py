import datetime
date_time=datetime.datetime.now()
print("Reports are: ")
print("1. Last Week")
print("2. Last Month")
print("3. Last 6 Month")
print("4. Last 1 Year")
choice=int(input("Which Report Date you want to see:- "))
if choice==1:
    week_date=date_time + datetime.timedelta(days=-7)
    print("The Report is available for ",week_date)
elif choice==2:
    month_date=date_time + datetime.timedelta(days=-30)
    print("The Report is available for ",month_date)
elif choice==3:
    half_yearly_date=date_time + datetime.timedelta(days=-183)
    print("The Report is available for ",half_yearly_date)
elif choice==4:
    year_date=date_time + datetime.timedelta(days=-365)
    print("The Report is available for ",year_date)
else:
    print("Invalid Number")
