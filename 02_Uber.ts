def shortest_dist(s, c):
    distances = []
    c_index = None

    # Encuentra el índice del carácter c en la cadena
    for i in range(len(s)):
        if s[i] == c:
            c_index = i
            break

    # Calcula la distancia entre cada carácter y el carácter c
    for i in range(len(s)):
        if s[i] == c:
            distances.append(0)
        else:
            distance = abs(i - c_index)
            distances.append(distance)

    print(distances)

# Ejemplo de uso
shortest_dist('helloworld', 'l')
