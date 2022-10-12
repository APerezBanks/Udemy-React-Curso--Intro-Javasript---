




const getImagen = async() => {

    try {
    const apiKey =  'aTTt1oXyA2xaSpmWTW1Eth5npsJJ4UhU';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${ apiKey}`)
    const { data } = await resp.json();

    const { url } = data.images.original;
    console.log(url)


    const img = document.createElement( 'img');
    img.src = url;
    document.body.append ( img );

        
    } catch (error) {

        //manejo del error con try y cath
        console.error(error)
    }
    

};


getImagen();
