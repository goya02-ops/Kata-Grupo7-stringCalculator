export function Sumar(numeros) {
 if (numeros === '') {
    return 0;
  }
  if (numeros.includes(',')) {
    const partes = numeros.split(',');
    return parseInt(partes[0], 10) + parseInt(partes[1], 10) + 
    (partes[2] ? parseInt(partes[2], 10) : 0);
  }

  return parseInt(numeros, 10);
}

