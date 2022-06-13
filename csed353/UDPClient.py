array = [5, 3, 2, 1, 6, 8, 7, 4]

def merge_sort(array):
    if len(array) <= 1:
        return array
    # mid = (0 + len(array)) // 2
    mid = len(array) // 2
    left_input = array[:mid]
    right_input = array[mid:]
    print('left_input', left_input)  # Q. left_array가 [5, 3, 2, 1]아닌지..?
    print('right_input', right_input)  # Q. right_array가 [6, 8, 7, 4]아닌지..?
    left_array = merge_sort(left_input)
    right_array = merge_sort(right_input)
    print(array)
    print('left_array', left_array)  #Q. left_array가 [5, 3, 2, 1]아닌지..? 
    print('right_array', right_array)  #Q. right_array가 [6, 8, 7, 4]아닌지..?
    return merge(left_array, right_array)


def merge(array1, array2):
    result = []
    array1_index = 0
    array2_index = 0
    while array1_index < len(array1) and array2_index < len(array2):
        if array1[array1_index] < array2[array2_index]:
            result.append(array1[array1_index])
            array1_index += 1
        else:
            result.append(array2[array2_index])
            array2_index += 1

    if array1_index == len(array1):
        while array2_index < len(array2):
            result.append(array2[array2_index])
            array2_index += 1

    if array2_index == len(array2):
        while array1_index < len(array1):
            result.append(array1[array1_index])
            array1_index += 1

    return result


print(merge_sort(array))