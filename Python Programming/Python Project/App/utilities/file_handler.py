import json

class FileHandler:

    @staticmethod
    def read_json(file_path):
        try:
            with open(file_path, "r") as file:
                return json.load(file)
        except FileNotFoundError:
            return []
        except Exception:
            print("Error reading file")
            return []

    @staticmethod
    def write_json(file_path, data):
        try:
            with open(file_path, "w") as file:
                json.dump(data, file, indent=4)
        except Exception:
            print("Error writing file")