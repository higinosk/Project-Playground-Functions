// Crie uma função usando o operador &&

function compareTrue(a, b) {
    if (a === true && b === true) {
      return true;
    }
    return false;
  }
  console.log(compareTrue(true, true));
  
  // Crie uma função que calcule a área do triângulo
  
  function calcArea(base, altura) {
    return (base * altura) / 2;
  }
  
  console.log(calcArea(10, 50));
  console.log(calcArea(5, 2));
  console.log(calcArea(51, 1));
  
  // Crie uma função que divida a frase
  
  function splitSetence(string) {
    return string.split(' ');
  }
  
  console.log(splitSetence('Vamo que vamo'));
  
  // Crie uma função que use concatenação de strings
  
  function concatName(array) {
    if (array.length === 0) {
      return '';
    }
    let ultimoItem = array[array.length - 1];
    let primeiroItem = array[0];
    let resultado = `${ultimoItem}, ${primeiroItem}`;
    return resultado;
  }
  
  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
  
  // Crie uma função que calcule a quantidade de pontos no futebol
  
  function footballPoints(wins, ties) {
    // 1 wins = 3 points
    // 1 tie = 1 point
    return wins * 3 + ties;
  }
  
  console.log(footballPoints(14, 8));
  
  // Crie uma função que calcule a repetição do maior número
  
  function highestCount(array) {
    let maiorNumero = Math.max(...array);
  
    let count = array.reduce((acc, num) => {
      if (num === maiorNumero) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return count;
  }
  
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
  
  // Crie uma função de Caça ao rato
  
  function catAndMouse(mouse, cat1, cat2) {
    let cat1Distance = Math.abs(mouse - cat1);
    let cat2Distance = Math.abs(mouse - cat2);
  
    if (cat1Distance < cat2Distance) {
      return 'cat1';
    }
    if (cat1Distance > cat2Distance) {
      return 'cat2';
    }
    return 'os gatos trombam e o rato foge';
  }
  
  console.log(catAndMouse(10, 7, 13));
  
  // Crie uma função FizzBuzz
  
  function fizzBuzz(array) {
    return array.map((num) => {
      if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
      }
      if (num % 3 === 0) {
        return 'Fizz';
      }
      if (num % 5 === 0) {
        return 'Buzz';
      }
      return 'Bug!';
    });
  }
  
  console.log(fizzBuzz([2, 15, 9, 25]));
  
  // Crie uma função que Codifique e Decodifique:
  
  function encode(string) {
    const vogaisParaNumeros = {
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5',
    };
    const caracteres = string.toLowerCase().split('');
  
    const encodedString = caracteres
      .map((char) => vogaisParaNumeros[char] || char)
      .join('');
    return encodedString;
  }
  
  console.log(encode('Hi There!'));
  
  function decode(string) {
    const numerosParaVogais = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    const caracteres =
      string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  
    const decodedString = caracteres
      .split('')
      .map((char) => numerosParaVogais[char] || char)
      .join('');
    return decodedString;
  }
  
  console.log(decode('h3 th2r2!'));
  
  // Crie uma função de Lista de tecnologias:
  
  function techList(techs, name) {
    if (techs.length === 0) {
      return 'Vazio!';
    }
    techs.sort();
    const techObjects = techs.map((tech) => ({
      tech,
      name,
    }));
  
    return techObjects;
  }
  console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
  
  // Crie uma função de Número de telefone:
  function generatePhoneNumber(array) {
    if (array.length !== 11) {
      return 'Array com tamanho incorreto';
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0 || array[i] > 9) {
        return 'Não é possível gerar um número de telefone com esses valores.';
      }
      let count = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          count++;
        }
      }
      if (count >= 3) {
        return 'Não é possível gerar um número de telefone com esses valores.';
      }
    }
    const phoneNumber = `(${array.slice(0, 2).join('')}) ${array
      .slice(2, 7)
      .join('')}-${array.slice(7).join('')}`;
  
    return phoneNumber;
  }
  console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
  
  //  Crie uma função de Condição de existência de um triângulo
  function triangleCheck(lineA, lineB, lineC) {
    const cond1 = Math.abs(lineB - lineC) < lineA && lineA < (lineB + lineC);
    const cond2 = Math.abs(lineA - lineC) < lineB && lineB < (lineA + lineC);
    const cond3 = Math.abs(lineA - lineB) < lineC && lineC < (lineA + lineB);
    return cond1 && cond2 && cond3;
  }
  
  console.log(triangleCheck(10, 14, 8));
  
  // Crie uma função de boas vindas ao Bar da Trybe!
  
  function hydrate(str) {
    // Extrai os numeros da string usando uma expressao regular
    const numbers = str.match(/\d+/g);
    // Calcula a quantidade total de copos de agua necessarios
    const totalCups = numbers.reduce((acc, n) => acc + parseInt(n), 0);
    // Determina se deve usar "copo" ou "copos" na mensagem de retorno
    const plural = totalCups === 1 ? 'copo' : 'copos'
    return `${totalCups} ${plural} de agua`;
  }
  
  console.log(hydrate('1 cerveja'));
  console.log(hydrate('1 cachaca, 5 cervejase 1 copo de vinho'));