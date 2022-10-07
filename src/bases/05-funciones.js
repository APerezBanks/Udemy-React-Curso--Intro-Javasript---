05// funciones en JS

const saludar = function ( nombre ) {
    return `Hola, ${ nombre}`;
}

// Ahora transformamos la funcion de arriba en funcion de flecha 

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre}`;
}
// si la funcion solo va retornar algo se puede incluso simplificar mas todavia , de la siguiente manera

const saludar3 = ( nombre ) =>  `Hola, ${ nombre}`;
const saludar4 = () => `Hola world`;

//  console.log( saludar(`Goku`) )

console.log( saludar2(`Vegeta`) );
console.log( saludar3(`Naruto`) );
console.log( saludar4() );

// const getUser = () => {
//     return {
//         uid: `abc123`,
//         username: ` hasomero`
//     }
// };

// se puede simplificar mas todavia

// const getUser = () => ({
//         uid: `abc123`,
//         username: `hasomero`
// });


// console.log( getUser() )

// const user = getUser();
// console.log(user);

//Tarea
//1. Transformen a una funcion de Flecha
//2. Tiene que retornar un objeto implicito
//3. Probarlo

// function getUsuarioActivo( nombre ) {
//     return {
//         uid: ` ABceAdrio`,
//         userName: nombre
//     }
// };

const getUsuarioActivo = ( nombre ) => 
      ( {        uid:'ABceAdrio',
               userName:'hasomo'
    });


const usuarioActivo = getUsuarioActivo('Alexjandro');
console.log( usuarioActivo ); 