/* 
url: https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f

Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.


*/


function findScreenHeight(width, ratio) {
    ratio = ratio.split(":");  //Separo el ratio para obtener los 2 valores en un array
    return `${width}x${(width * ratio[1]) / ratio[0]}`
}