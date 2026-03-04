const TMDB_Endpoint= 'https://api.themoviedb.org/3';
const api= '1179ed836a951d3799912bbfe8c5803c';
const img_prefix= 'https://image.tmdb.org/t/p/w500';
function carregaInfos(){
    let xhr;
    xhr= new XMLHttpRequest();
    xhr.open('GET', TMDB_Endpoint+ '/movie/popular?api_key='+ api+ '&language=pt-BR', true);
    xhr.onload=exibeInfo;
    xhr.send()
}



function exibeInfo(xhr){
    let textHTML='';
    let info=JSON.parse(xhr.target.responseText);
    for(let i=0; i<info.results.length; i++){
        let img=img_prefix+info.results[i].id.poster_path;
        let descri=info.results[i].overview;
        let titulo= info.results[i].title;
        let aval=info.results[i].popularity;
        let r_data=info.results[i].release_date;
    }
    textHTML+=`<div class="col-12 titulo">
    <h1>${titulo}</h1>
</div>
<div class="col-12 movie_info">
    <img class="img_filme" src="${img}" alt="">
    <p>${descri}</p>
    <p>Diretor: fulano</p>
    <p>Data de lançamento: ${r_data}18/06/2021</p>
    <p>Avaliação: ${aval}</p>
</div>`

document.getElementById('infos').innerHTML=textHTML;
}
