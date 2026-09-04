def id_validation():
    while True:
        delete_id = input("Enter Student ID: ").strip()

        if not delete_id.isdigit():
            print("Invalid ID! Only numbers allowed.")
        elif len(delete_id) != 14:
            print("Invalid ID! ID must be exactly 14 digits.")
        else:
            return delete_id