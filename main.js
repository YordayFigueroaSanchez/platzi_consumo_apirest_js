const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=2b4ff403-2b9c-451a-94c7-8f54171b627e';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?api_key=2b4ff403-2b9c-451a-94c7-8f54171b627e';


const spanError = document.getElementById('error')

async function loadRandomCats(){
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('Random');
    console.log(data);

    if (res.status != 200) {
        
        spanError.innerHTML = "Error: " + res.status;

    } else {
        
        const image01 = document.getElementById('image01');
        const image02 = document.getElementById('image02');
        const image03 = document.getElementById('image03');

        const btn01 = document.getElementById('btn1');
        const btn02 = document.getElementById('btn2');
        const btn03 = document.getElementById('btn3');
        
        image01.src = data[0].url;
        image02.src = data[1].url;
        image03.src = data[2].url;

        btn01.onclick = () => saveFavoriteCats(data[0].id);
        btn02.onclick = () => saveFavoriteCats(data[1].id);
        btn03.onclick = () => saveFavoriteCats(data[2].id);
    }
    
}

async function loadFavoritesCats(){
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log('Favorites');
    console.log(data);

    if (res.status != 200) {
        
        spanError.innerHTML = "Error: " + res.status;

    } else {
       data.forEach(gato => {
           console.log(gato.image.url);
           const section = document.getElementById('favoritesMichis');
           const article = document.createElement('article');
           const img = document.createElement('img');
           const btn = document.createElement('button');
           const btnText = document.createTextNode('Sacar gato de favoritos');

           btn.appendChild(btnText);
           img.src = gato.image.url;
           article.appendChild(img);
           article.appendChild(btn);
           section.appendChild(article);
       })
    }
    
}

async function saveFavoriteCats(id){
    const res = await fetch(API_URL_FAVORITES,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            image_id: id
        })
    });

    const data = await res.json();

    console.log('Saves');
    console.log(res);

    if (res.status != 200) {
        
        spanError.innerHTML = "Error: " + res.status;

    } 

}

loadRandomCats();
loadFavoritesCats();

