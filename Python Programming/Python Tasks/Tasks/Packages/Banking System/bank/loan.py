def calculate_interest(principal, rate, time):
    interest = (principal * rate * time) / 100
    print("Calculated Interest:", interest)
    return interest


def calculate_total_amount(principal, interest):
    total = principal + interest
    print("Total Amount to Pay:", total)
    return total
