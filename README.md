# typescript_interview

Matricula: 2190040

## 1. Este problema fue pedido por Amazon.

Existe una escalera con N escalones, y puedes subir 1 o 2 escalones a la vez. Dado N, escribe una función que devuelva el número de formas únicas en que puedes subir la escalera. El orden de los pasos importa.

Por ejemplo, si N es 4, entonces hay 5 formas únicas:

1, 1, 1, 1

2, 1, 1

1, 2, 1

1, 1, 2

2, 2

¿Qué pasaría si, en lugar de poder subir 1 o 2 escalones a la vez, pudieras subir cualquier número de un conjunto de enteros positivos X? Por ejemplo, si X = {1, 3, 5}, podrías subir 1, 3 o 5 escalones a la vez.

Realiza un programa en Typescript que imprima por consola las formas únicas de subir las escaleras.

### La solución al problema es la siguiente:

He declarado una función llamada uniqueWaysToClimb que toma dos parámetros: n (el número de escalones) y steps (un array de los pasos permitidos). Luego Creado un array llamado dp de tamaño n + 1 e inicializamos todos los elementos en 0. Este array se utilizará para almacenar los resultados intermedios. Establecemos dp[0] en 1, ya que hay una única forma de subir una escalera de 0 escalones (no subir ningún escalón). Utilizamos dos bucles for anidados. El bucle externo itera desde 1 hasta n y representa el número de escalones. El bucle interno itera sobre cada paso permitido en el array steps. Para cada escalón i y cada paso permitido step, verificamos si podemos retroceder step escalones desde i sin salirnos de los límites de la escalera. Si es así, sumamos el número de formas únicas almacenado en dp[i - step] al número de formas únicas en dp[i]. Finalmente, imprimir por consola el número de formas únicas de subir la escalera con n escalones, que se encuentra en dp[n].

### Big O:
La complejidad de tiempo de la solución al problema es O(n), donde n es el número de escalones.

En la solución propuesta, se usa un bucle que itera n veces para calcular las formas únicas de subir la escalera. Dentro de cada iteración, realizamos operaciones de tiempo constante para calcular el número de formas únicas. Por lo tanto, a medida que el tamaño de entrada (número de escalones) aumenta, el tiempo de ejecución de la función aumenta de manera lineal, lo que lleva a una complejidad de O(n). Es importante tener en cuenta que esta complejidad asume que el conjunto de pasos permitidos es de tamaño constante. Si el tamaño del conjunto de pasos permitidos también aumenta con n, entonces la complejidad sería O(n * m), donde m es el tamaño del conjunto de pasos permitidos. Sin embargo, si m es un valor constante, la complejidad se reduce a O(n).

## 2. Uber preguntó recientemente el problema:

Dada una cadena s y un carácter c, encuentre la distancia entre todos los caracteres de la cadena y el carácter c de la cadena s. Puede suponer que el carácter c aparecerá al menos una vez en la cadena.

Aquí hay un ejemplo y un código de inicio:

distancia_más_corta(s, c)

Complete esta la funcion anterior para que imprima por consola un arreglo con las distancias ejemplo:
shortest_dist('helloworld', 'l')

h e l l o w o r l d

[2, 1, 0, 0, 1, 2, 2, 1, 0, 1]

0 1 2 3 4 5 6 7 8 9

### Solucion y Big o:
En el primer bucle for, se recorre la cadena s para encontrar el índice del carácter c. Esto tiene una complejidad de O(n), donde n es el tamaño de la cadena. En el segundo bucle for, recorremos nuevamente la cadena s para calcular las distancias entre cada carácter y c. Esto también tiene una complejidad de O(n), ya que estamos realizando un bucle sobre la cadena de tamaño n.

En general, podemos decir que el tiempo de ejecución de la función shortest_dist es proporcional al tamaño de la cadena, por lo que la complejidad de tiempo es O(n), donde n es el tamaño de la cadena. En cuanto al espacio, se utiliza una lista llamada distances para almacenar las distancias. El tamaño de esta lista es igual al tamaño de la cadena, por lo que la complejidad de espacio es O(n), donde n es el tamaño de la cadena. En resumen, la solución tiene una complejidad de tiempo O(n) y una complejidad de espacio O(n), donde n es el tamaño de la cadena s.


## 3. Facebook preguntó recientemente el problema: (Slider Window)

Dada una matriz de números positivos y un número positivo 'S', encuentre la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'. Retorna 0, si no existe tal subarreglo

Input: [2, 1, 5, 2, 3, 2], S=7

Output: 2

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [5, 2].

Input: [2, 1, 5, 2, 8], S=7

Output: 1

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [8].

Nota: No puedes usar ciclos anidados para resolver el problema.

### Solucion
En la solución apicada, se usan dos punteros, window_start y window_end, para definir una ventana deslizante que representa el subarreglo actual. Inicialmente, ambos punteros están en el índice 0. Mientras se expande la ventana (window_end avanza), calculamos la suma acumulada window_sum de los elementos dentro de la ventana. Si la suma acumulada es mayor o igual al objetivo target, registramos la longitud del subarreglo actual (window_end - window_start + 1). Luego, comenzamos a reducir la ventana, moviendo window_start hacia adelante y disminuyendo window_sum hasta que la suma acumulada sea menor que el objetivo. Continuamos moviendo ambos punteros hasta que lleguemos al final de la matriz. Al final, comprobamos si se encontró algún subarreglo que cumpla la condición. Si no se encontró ninguno, retornamos 0. De lo contrario, retornamos la longitud mínima encontrada.

### Big O
La solución tiene una complejidad de tiempo O(n), ya que recorremos la matriz una vez con los punteros window_start y window_end. Las operaciones dentro del bucle son de tiempo constante, lo que resulta en una complejidad lineal en función del tamaño de la matriz.

La complejidad de espacio es O(1), ya que utilizamos solo unas pocas variables adicionales para almacenar los punteros, la suma acumulada y la longitud mínima del subarreglo. No se utiliza espacio adicional proporcional al tamaño de la matriz.

En resumen, la solución es eficiente, con una complejidad de tiempo lineal y una complejidad de espacio constante.


