const { subtrai, ehPar, contarCaracteres } = require('../src/calculadora');

describe('Testes da Calculadora', () => {
  test('Subtrai dois números corretamente', () => {
    expect(subtrai(5, 3)).toBe(2);
    expect(subtrai(10, 2)).toBe(8);
  });

  test('Verifica se um número é par', () => {
    expect(ehPar(4)).toBe(true);
    expect(ehPar(7)).toBe(false);
  });

  test('Conta o número de caracteres em uma string', () => {
    expect(contarCaracteres('hello')).toBe(5);
    expect(contarCaracteres('test')).toBe(4);
  });
});