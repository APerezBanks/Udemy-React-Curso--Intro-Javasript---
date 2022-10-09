// Desestructuracion
// Asignacion Desestructurante . Informacion addicional en el link
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    
};

// const { edad, clave, nombre } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );
// console.table( persona )

const doContext = ( { clave, nombre, edad ,rango = 'Capitan' } ) => {

    // console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 1121141213,
            lng: -1421821

        }

     }
};

// const avenger = useContext ( persona );

// useContext = se error es debido a la nueva versión de React (17). Ahora las palabras "use" y "set" al principio estan reservadas y solo se pueden usar en lugares específicos.
// La solución es cambiar el nombre a cualquier otro que no tenga "use" o "set" al principio.



// tarea desestrutura la linea 29 , escribela debajo

const { nombreClave, anios, latlng:{lat, lng} } = doContext( persona );

console.log(nombreClave, anios)
console.log (lat, lng);
