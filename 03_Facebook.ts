def smallest_subarray_sum(nums, target):
    min_length = float('inf')  # Inicializamos la longitud mínima con un valor infinito
    window_start = 0
    window_sum = 0

    for window_end in range(len(nums)):
        window_sum += nums[window_end]  # Expandimos la ventana agregando el elemento actual

        while window_sum >= target:
            min_length = min(min_length, window_end - window_start + 1)  # Actualizamos la longitud mínima
            window_sum -= nums[window_start]  # Reducimos el tamaño de la ventana eliminando el elemento al inicio
            window_start += 1

    if min_length == float('inf'):
        return 0  # Si no se encontró ningún subarreglo que cumpla la condición, retornamos 0
    else:
        return min_length

# Ejemplo de uso
nums = [2, 1, 5, 2, 3, 2]
target = 7
result = smallest_subarray_sum(nums, target)
print(result)
