/**
 * Ejemplos para la Desestructuración de un Array - Arreglo [] con JavaScript, 
 * la misma permite desempacar (separar)
 * valores de arreglos o propiedades de objetos en distintas variables.
*/


/** Recordemos que un Array se define dentro de corchetes ['a', 'b', 7, 0.5, true,'Urian'] 
 *  y un objeto con llaves {'a':2, 'b':'soy b'} 
 *  los elementos dentro del mismo pueden ser de tipo;
 *  String, numeros(Number), boolean(true, false), enteros(INT), float, Decimales, Object, null, etc.. 
*/

let lenguajes    = ['Java','C','C++','JavaScript','Python','PHP','NodeJS','SQL'];
let MarcasCarros = ['Ferrari','BMW','Mercedes-Benz','Tesla','Audi'];
console.log(Array.isArray(MarcasCarros)); //Comprobamos si es un Array con el Método Array.isArray
console.log(MarcasCarros.length) //Comprobamos la longitud del Array con la propiedad length

//var - let y const son palabra reservada que definen un tipo de variable OK

//La forma ordinaria de obtener elementos de un Arrray seria usando la posición del mismo.
let primerElemento = MarcasCarros[0] //Obtenemos el primer elemento de Array atraves de su posición
let ultimoElemento = MarcasCarros[MarcasCarros.length - 1] //Obtenemos último elemento del Arrray con la propiedad length

// La forma moderna de obtener elementos de un Array seria declarando
// variables [let a, const b, var] y asignandolas ha elementos del Array
const [f, t, u, i, h] = MarcasCarros;
console.log(f);
console.log(t);
console.log(f, t, u, i, h);

//Recorrer un Array con el Método ForEach
MarcasCarros.forEach((elemento, indice)=>{
  console.log(elemento, indice);
});


/**Caso 1; Asignación separada de la declaración */
let a, b, c, rest;
[a, b] = [10, 20];
/**Cuál será el resultado ? */
console.log(`a: ${a} y b: ${b}`);


/** Asignación básica de variables, esto equivale ha: */
let numeros = ['uno', 'dos','tres'];
[a, b, c] = numeros;
/**Cuál será el resultado ? */
console.log(`a: ${a}, b: ${b} y c: ${c}`);
console.log(a);
console.log(b);
console.log(c);


/** Ejemplo */
const [v1,, v2] = lenguajes;

/** Caso 2  */
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
/**Cuál será el resultado ? */
console.log(`y: ${y} y z: ${z}`);


/** Asignar el resto de un arreglo a una variable, Al desestructurar un arreglo, puedes desempacar 
 * y asignar la parte restante a una variable usando el patrón rest
*/

[a, b, ...rest] = [10, 20, 30, 40, 50];
/**Cuál será el resultado ? */
console.log(`a: ${a}, b: ${b} y rest: ${rest}`);

/** Ejemplo similar */
const nombres = ['urian','Brenda','Alejandro','Luis','Sandra'];
const [n1, n2,...resto] = nombres;


const [a5, ...b5] = [1, 2, 3];
/**Cuál será el resultado ? */
console.log(`a5: ${a5} y b5 ${b5}`);

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...resto5] = numbers;


/** NOTA; si se usa una coma(,) al final en el lado derecho con un elemento rest ,*/
//const [a6, ...rest,] = [1, 2, 3];
//const [n3, n3,...resto3,] = nombres


/** Intercambio de variables, los valores de dos variables se pueden intercambiar en una expresión de Desestructuración.*/
let a2, b2;
[a2 = 5, b2 = 7] = [1];
/**Cuál será el resultado ? */
console.log(`a2: ${a2} y b2 ${b2}`);


let a3 = 1;
let b3 = 3;

/**Esto es igual ha: */
//let a3, b3 = [1, 3]

[a3, b3] = [b3, a3];
/**Cuál será el resultado ? */

/**Mutando un Array */
const arrayNumero = [1,2,3];
[arrayNumero[2], arrayNumero[1]] = [arrayNumero[1], arrayNumero[2]];
/**Cuál será el resultado ? */
console.log(arrayNumero);

  
/** Ignorando algunos valores devueltos, Puedes ignorar los valores de retorno que no te interesan. */
const n = [1, 2, 3];
const [a4, , b4] = n;
/** Cuál será el resultado ? */


//-------------Unir más de 1 Array-------------------
const arrayUno = [1, 2, 3];
const arrayDos = [4, 5, 6];
const arrayUnido = [...arrayUno, ...arrayDos];
console.log(arrayUnido);


