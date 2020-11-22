/*
url: https://www.codewars.com/kata/5dae2599a8f7d90025d2f15f
Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .

Examples:

* consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) . 

* consecutiveDucks(64)  ==>  return (false)

* consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 )  .

*/

//Versión 2 (muy eficiente):
//Buscará siempre un número impar (devuelve true) y, de no encontrarlo no existela combinación solicitada (devuelve false)
function consecutiveDucks(num) {
    while (num > 2) {
        if (num % 2 != 0) return true
        num = num / 2;
    }
    return false
}










