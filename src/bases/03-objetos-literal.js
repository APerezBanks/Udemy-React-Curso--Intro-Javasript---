

const persona = {
    nombre: 'Antonio' ,
    apellido: 'Stark',
    edad: 34,
    direccion: {
        ciudad: 'Romanio',
        codigo_postal: '2394823e',
        latitud: 22134,

    }
};


console.log( persona ); 

// para verlo en el console log en forma de tabla y mas ordenado

// console.table( persona ); 

const persona2 = { ...persona };
persona2.nombre = 'Peter';
persona2.apellido = 'Parquero';

console.log ( persona );
console.log ( persona2 )

