export function Sumar(numeros) {
 if (numeros === '') {
    return 0;
  }
  if (numeros.includes(',')) {
    const partes = numeros.split(',');
    return partes.reduce((suma, parte) => suma + parseInt(parte, 10), 0);
  }

  return parseInt(numeros, 10);
}

