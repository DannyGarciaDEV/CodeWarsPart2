def converter(mpg):
    miles_to_km = 1.609344
    gallons_to_liters = 4.54609188
    kpl = (mpg * miles_to_km) / gallons_to_liters
    return round(kpl, 2)
