/* 
url: https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a

There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9

*/

function solve(stones) {
    let count = 0;
    //Recorremos el string introducido:
    for (let i = 0; i < stones.length; i++) {
        //Si dos piedras consecutivas son iguales, añadimos 1 al contador
        if (stones[i] === stones[i + 1]) {
            count++;
        }
    }
    return count;
}
