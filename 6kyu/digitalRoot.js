/*
url: https://www.codewars.com/kata/541c8630095125aba6000c00

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
 The input will be a non-negative integer.

 Examples:

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

function digital_root(n) {
  n = `${n}`; //Paso el número introducido a string

  while (n.length > 1) {
    let accum = 0; //Creo un acumulador donde almacenaré el resultado de sumar los dígitos
    for (let i = 0; i < n.length; i++) {
      //Recorro las posiciones del string
      accum += parseInt(n[i]); //Sumo al acumulador la cifra que le corresponda
    }
    n = `${accum}`;
  }

  n = parseInt(n); //Convierto el resultado final a Integer

  return n;
}
