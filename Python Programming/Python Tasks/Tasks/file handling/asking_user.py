from datetime import datetime

num = int(input("How many files do you want to create? "))

for i in range(1, num + 1):
    now = datetime.now()
    timestamp = now.strftime("%Y%m%d_%H%M%S")

    file_name = f"student_{i}.txt"

    with open(file_name, "w") as file:
        file.write(f"This file was created at {timestamp}\n")

    print(f"{file_name} created successfully!")

print("\nAll files created successfully ")
