// import { heroes } from './Data/heroes'
// hay varias maneras de importar la linea 1 es una de ellas.

import heroes, { owners } from "../Data/heroes";

// import { heroes } from './Data/heroes'


// const getHeroeById = (id) => {
//     return heroes.find(( heroe ) => {
//         if( heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });

// }

// console.log ( getHeroeById(2) );

// la parte de arriba es demasiado largo, hay otra manera mas sencilla de hacerlo, debajo esta el mismo codigo simplificado

//version 1

// const getHeroeById = (id) => {
//     return heroes.find((heroe) => heroe.id === id );
// } 

//version 2

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id );

// console.log ( getHeroeById(2) );

// usar filter en vez de find

export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner );

// console.log ( getHeroeByOwner('DC') );


 
 