/* 
url: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

*/


function multiTable(number) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${i} * ${number} = ${i * number}`
        result += i < 10 ? "\n" : "";
    }

    return result;
}