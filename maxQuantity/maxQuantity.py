def calculate_max_quantity(box_length, box_width, box_height, product_length, product_width, product_height):
    length_fit = box_length // product_length
    width_fit = box_width // product_width
    height_fit = box_height // product_height

    max_quantity = length_fit * width_fit * height_fit

    return max_quantity
