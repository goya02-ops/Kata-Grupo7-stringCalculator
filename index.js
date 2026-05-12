export function Sumar(numeros) {
 if (numeros === '') {
    return 0;
  }
  
  // En lugar de hardcodear '1', convertimos cualquier cadena de un solo número a Entero.
  return parseInt(numeros, 10);
}

