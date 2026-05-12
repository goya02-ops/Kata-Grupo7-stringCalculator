/*
Guia TDD para la kata String Calculator:

Paso 1: Caso base (string vacio)
  Red:  Sumar("") → 0
  Green: return 0
  Refactor: nombre descriptivo

Paso 2: Un solo numero
  Red:  Sumar("1") → 1
  Green: int.Parse(numeros)
  Refactor: int.TryParse o simplificar condicional

Paso 3: Dos numeros separados por coma
  Red:  Sumar("1,2") → 3
  Green: Split(',') y sumar
  Refactor: LINQ (Split(',').Sum(int.Parse))

Resumen de tests:
  ""     → 0
  "1"    → 1
  "1,2"  → 3
  "4,2"  → 6
*/
import { test, expect, describe } from '@jest/globals';
import { Sumar } from './index';

describe('Sumar', () => {
  test('Sumar_StringVacio_RetornaCero', () => {
    expect(Sumar('')).toBe(0);
  })

  test('Sumar_UnNumero_RetornaElNumero', () => {
    expect(Sumar('1')).toBe(1);
  })

  test('Sumar_DosNumeros_RetornaLaSuma', () => {
    expect(Sumar('1,2')).toBe(3);
  })
  
})
