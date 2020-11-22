/* 
url: https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

In this Kata, you will sort elements in an array by decreasing frequency of elements.
If two elements have the same frequency, sort them by increasing value.

Example: 

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value
*/

function solve(arr) {
    //Creamos un objeto vacío
    let numOccurs = {};

    //Introducimos el número de veces que se repite cada elemento del array
    for (let i = 0; i < arr.length; i++) {
        if (numOccurs[arr[i]]) {
            numOccurs[arr[i]]++
        } else {
            numOccurs[arr[i]] = 1;
        }
    }
    //Convertimos el objeto a un array, lo ordenamos según la frecuencia de aparición y vaciamos el array original
    numOccurs = Object.entries(numOccurs).sort((a, b) => {
        if (parseInt(a[1]) === parseInt(b[1])) {
            //En  caso de que dos números se repitan las mismas veces, ordena de menor mayor
            return a[0] - b[0];
        }
        return b[1] - a[1];
    });
    arr = [];

    //Recorremos el array anterior
    for (let num of numOccurs) {
        //Introducimos en el array inicial los números por orden de aparición
        for (let i = 0; i < num[1]; i++) {
            arr.push(parseInt(num[0]));
        }
    }
    return arr;

}




