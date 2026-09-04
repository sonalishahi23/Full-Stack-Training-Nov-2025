import data_module
import json

def view_all_records():
    if not data_module.student_data:
        print(" No student records available")
        return

    print(" All Student Records (JSON Format):")
    print(json.dumps(data_module.student_data, indent=4))