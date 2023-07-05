function uniqueWaysToClimb(n: number, steps: number[]): void {
  // Creamos un array de tamaño n+1 y lo llenamos con ceros
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1; // Inicializamos la primera posición con 1, ya que hay una única forma de subir 0 escalones

  // Recorremos desde 1 hasta n para calcular las formas únicas de subir cada escalón
  for (let i = 1; i <= n; i++) {
    // Iteramos sobre cada paso permitido en el array steps
    for (const step of steps) {
      // Verificamos si podemos retroceder step escalones sin salirnos de los límites
      if (i - step >= 0) {
        // Sumamos el número de formas únicas almacenado en dp[i - step] al número de formas en dp[i]
        dp[i] += dp[i - step];
      }
    }
  }

  console.log(`Número de formas únicas para subir la escalera con ${n} escalones:`);
  console.log(dp[n]); // Imprimimos el número de formas únicas de subir la escalera con n escalones
}

// Ejemplo de uso
const numberOfSteps = 4; // Número de escalones
const stepsAllowed = [1, 2]; // Pasos permitidos
uniqueWaysToClimb(numberOfSteps, stepsAllowed); // Llamamos a la función con los valores de ejemplo
