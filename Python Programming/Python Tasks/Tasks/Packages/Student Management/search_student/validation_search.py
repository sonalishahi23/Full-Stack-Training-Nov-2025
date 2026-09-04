
def validate_id(searching_id):

    if searching_id.isdigit() and len(searching_id) == 14:
        return True
    else:
        print("Invalid ID!")
        return False