// Desestructuracion de Arreglos

const personajes = ['Goku', 'Vegeta','Trunks'];
// desestructuracion de un arreglo, const [] = 
const [ p1 ] = personajes;

console.log( p1 )

// si necesito llamar a Vegeta como  va asi [ 0 ,1 ,2, 3] etc tendria que 
// dejar un hueco  para llamar al 2 tal que asi [ , 1]

const [ , p2 ] = personajes;
console.log ( p2 );

// si quisiera llamar a Trunks seria

const [ , , p3 ] = personajes;
console.log ( p3 );

const retornaArreglo = () => {
    return [ 'ABC', 123];
}

//  llamar el retorna arreglo y extraer las letras y numeros

const [ letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. el primer valor del arr se llamara nombre
//2. se llamara setNombre 

const goState = ( valor ) => {
    return [valor, () => { console.log('Hola Worldu') } ];
}

// para la tarea hay que desestruturar la siguiente linea
// const arr = goState( 'Goku');
 
const [nombre, setNombre] = goState( 'Goku ');


console.log( nombre );

setNombre();


