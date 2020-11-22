/*
url: https://www.codewars.com/kata/5dae2599a8f7d90025d2f15f
Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .

Examples:

* consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) . 

* consecutiveDucks(64)  ==>  return (false)

* consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 )  .

*/

//Versión 1 (poco eficiente con números muy grandes):

function consecutiveDucks(num) {
    if (num % 2 === 0 && num % 3 !== 0 && num % 5) {
        let numLog = Math.log2(num);
        if (numLog % 1 === 0) {
            return false;
        }
        //Recorreremos todos los números hasta la mitad de la cifra introducida
        for (let i = 1; i <= num / 2 - 1; i++) {
            //Definimos dos acumuladores:
            let accum = 0;
            let x = i;

            do {
                accum += x; //Sumamos el número que corresponda al acumulador
                x++;//Pasamos al siguiente número
                if (accum === num) {
                    return true;
                };
            } while (accum < num);
        }
    } else {
        //Si el número es impar, devolvemos true, ya que siempre es posible obtener mínimo una combinación
        return true;
    }

    return false;
}












