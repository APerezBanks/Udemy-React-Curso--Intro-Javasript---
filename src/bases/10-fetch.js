
const apiKey =  'aTTt1oXyA2xaSpmWTW1Eth5npsJJ4UhU';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${ apiKey}`)

peticion
.then( resp => resp.json() )
.then( ({ data }) => {
    //console.log(data.images.original.url)
    // desustructuracion de la line 9 seria :

    const { url } = data.images.original;
    
    // esta parte es para que podamos ver la img

    const img = document.createElement( 'img');
    img.src = url;
    document.body.append ( img );


})

.catch ( console.warn ); 