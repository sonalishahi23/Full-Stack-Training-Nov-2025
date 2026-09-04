def calculate_grade(avg):
    if avg >= 75:
        return "First Class"
    elif avg >= 60:
        return "Second Class"
    elif avg >= 50:
        return "Third Class"
    else:
        return "Fail"

def is_pass(avg):
    return avg >= 35
