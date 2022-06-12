const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=2b4ff403-2b9c-451a-94c7-8f54171b627e';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=3&api_key=2b4ff403-2b9c-451a-94c7-8f54171b627e';


const spanError = document.getElementById('error')

async function loadRandomCats(){
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('Random');

    if (res.status != 200) {
        
        spanError.innerHTML = "Error: " + res.status;

    } else {
        
        const image01 = document.getElementById('image01');
        const image02 = document.getElementById('image02');
        const image03 = document.getElementById('image03');
        
        image01.src = data[0].url;
        image02.src = data[1].url;
        image03.src = data[2].url;
    }
    
}

async function loadFavoritesCats(){
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log('Favorites');

    if (res.status != 200) {
        
        spanError.innerHTML = "Error: " + res.status;

    } else {
        
        const image01 = document.getElementById('image01');
        const image02 = document.getElementById('image02');
        const image03 = document.getElementById('image03');
        
        image01.src = data[0].url;
        image02.src = data[1].url;
        image03.src = data[2].url;
    }
    
}

loadRandomCats();
loadFavoritesCats();
