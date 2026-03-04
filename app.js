const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const APIKEY = '1179ed836a951d3799912bbfe8c5803c';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
let xhr;

function carregaFilmes() {
    xhr = new XMLHttpRequest();

    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + APIKEY + '&language=pt-BR', true);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function pesquisaFilmes() {
    xhr = new XMLHttpRequest();

    query = document.getElementById('txtpesquisa').value;

    xhr.open('GET', TMDB_ENDPOINT + '/search/movie' + '?api_key=' + APIKEY + '&query=' + query + '&language=pt-BR', true);
    xhr.onload = exibeFilmes;
    xhr.send();
}


function exibeFilmes() {

    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';

    for (let i = 0; i < data.results.length; i++) {
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="col-3 card">
        <img src="${imagem}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${nomeFilme}</h5>
            <p class="card-text">${sinopse}</p>
            <a href="https://www.themoviedb.org/movie?language=pt-BR" class="btn btn-success"><i class="fas fa-plus"></i> Saiba mais</a>
        </div>
    </div>`
    }

    document.getElementById('movies').innerHTML = textoHTML;
}
