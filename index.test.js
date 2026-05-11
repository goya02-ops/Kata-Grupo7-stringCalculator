/*Paso 1: El caso base(String vacío)1. Red(Falla):Escribe un test que verifique que al pasar un string vacío "", el método Sumar devuelva 0.Test: Sumar("") ⮕ Resultado esperado: 0Código mínimo: Crea la función Sumar que solo lance una excepción o devuelva un valor incorrecto(como - 1) para ver el test fallar.2.Green(Pasa):Escribe el código mínimo necesario para que el test pase.Código: return 0; 3. Refactor:En este punto, con una sola línea, no suele haber mucho que limpiar, pero asegúrate de que el nombre del test sea descriptivo(ej: Sumar_StringVacio_RetornaCero).Paso 2: Un solo número1.Red(Falla):Ahora un test para un solo número.Test: Sumar("1") ⮕ Resultado esperado: 1Falla: El código actual siempre devuelve 0.2.Green(Pasa):Modifica la función para que maneje el caso de un número.Código: ```csharpif (string.IsNullOrEmpty(numeros)) return 0;return int.Parse(numeros);
3. Refactor:Revisa si puedes mejorar la legibilidad. Quizás usar int.TryParse o simplificar el condicional.Paso 3: Dos números separados por coma1. Red (Falla):Añade la lógica de la suma.Test: Sumar("1,2") ⮕ Resultado esperado: 3Falla: int.Parse lanzará una excepción porque no sabe qué hacer con la coma.2. Green (Pasa):Implementa la lógica de división (Split).Código:C#if (string.IsNullOrEmpty(numeros)) return 0;
var partes = numeros.Split(',');
int suma = 0;
foreach (var p in partes) {
    suma += int.Parse(p);
}
return suma;
3. Refactor:Aquí es donde el TDD brilla. Ahora que tienes tests que protegen tu lógica, puedes usar LINQ (si estás en .NET) para que el código sea más limpio:Código Refactorizado:C#return string.IsNullOrEmpty(numeros) 
    ? 0 
    : numeros.Split(',').Sum(int.Parse);
Resumen de la primera funcionalidadTestInputSalida EsperadaTest 1""0Test 2"1"1Test 3"1,2"3Test 4"4,2"6*/
import { test, expect, describe } from '@jest/globals';
import { Sumar } from './index';

describe('Sumar', () => {
  test('Sumar_StringVacio_RetornaCero', () => {
    expect(Sumar('')).toBe(0);
  })
})