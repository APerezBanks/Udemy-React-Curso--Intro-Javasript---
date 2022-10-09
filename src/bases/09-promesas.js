import { getHeroeById }from './08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//         // console.log(' 2 segundos despues')

//         //Tarea
//         // importar get hero by id de la leccion 8
//         // para importar hay que tambien exportar asi que vamos a la pagina de 08 imp... y ahi delante de get hero by id escribimos export
//         // luego volvemos aqui y arriba lo tenemos que impotar tambien

//         const heroe = getHeroeById(2);
//         resolve( heroe );
//         // console.log(heroe)
//         // resolve();
//     }, 2000 )
// });


// promesa.then( (heroe) => {
//     console.log('heroe', heroe )
// })

// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {

 return new Promise( (resolve, reject) => {

        setTimeout( () => {

            const p1 = getHeroeById( id );
           if ( p1 ) {
            resolve( p1 );
         } else {
            reject( 'No hay un heroe' )};

        }, 100 ) 
 
    });
    
};

getHeroeByIdAsync(2)
  .then( console.table )
  .catch( console.warn );

