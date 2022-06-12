console.log('Hello world !!!');

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3';


async function reload(){
    const res = await fetch(API_URL);
    const data = await res.json();
    
    const image01 = document.getElementById('image01');
    const image02 = document.getElementById('image02');
    const image03 = document.getElementById('image03');
    
    image01.src = data[0].url;
    image02.src = data[1].url;
    image03.src = data[2].url;
    //console.log(data);
    

}

reload();
