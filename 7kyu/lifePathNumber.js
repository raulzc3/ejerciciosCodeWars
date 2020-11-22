/* 
url: https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0/train/javascript/5fb988cfad6301000d9d9b13

A person's Life Path Number is calculated by adding each individual number in that person's date of birth, untill it is reduced to a single digit number.

Example: 
year: 1 + 8 + 7 + 9 = 25; 2 + 5 = 7
month: 0 + 3 = 3
day: 1 + 4 = 5
final result: 7 + 3 + 5 = 15; 1 + 5 = 6

*/


function lifePathNumber(dateOfBirth) {
    // Your solution...
    let lifenum = 0;

    for (let num of dateOfBirth) {
        if (num !== "-") { //Sumamos todos los elementos del array de entrada excepto los guiones
            lifenum += parseInt(num);
        }
    }


    do {

        dateOfBirth = lifenum.toString().split(''); //Asignamos a la variable el contenido de lifenum en forma de array
        lifenum = 0; //Reiniciamos el valor de lifenum

        //Sumamos todos los dígitos de dateOfBirth (anterior lifenum)
        for (let num of dateOfBirth) {
            lifenum += parseInt(num);
        }

    } while (lifenum > 9) //Repetiremos este proceso hasta que el número sea menor que nueve


    return lifenum; //Retornamos el número de vida correspondiente a la fecha introducida
}