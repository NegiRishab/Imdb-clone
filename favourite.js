// var url=localStorage.getItem("Poster");
// var title=localStorage.getItem("Title")
// var plot=localStorage.getItem("Plot");
// var language=localStorage.getItem("Language");
// console.log(url);
// console.log(localStorage.getItem("fav_movies"))
// let fav_movie=JSON.parse ( localStorage.getItem("fav_movies"));
// var current;
// for(let movie of fav_movie){

// var a=movie.Title;
// // current=movie;
// console.log(current);
//     $(".movies-List").append(`<div id="movie-slot" style="margin: 10vw; width:30vw;" >
//     <a href=movie.html target="_blank"><img src=${movie.Poster}/></a>
//     <p ><b> Title - &nbsp${movie.Title}</b></p>
//     <p><b>Language - &nbsp${movie.Language}</b></p>
//     <p><b> Plot-&nbsp${movie.Plot}</b></p>
//     <button onclick="remove(${'a'})">Remove from my Favourite</button> </div>
//     </div>`);
// }

    console.log(localStorage.getItem("fav_movies"))
let fav_movie=JSON.parse ( localStorage.getItem("fav_movies"));
var current;
for(let movie of fav_movie){


console.log(current);
   document.getElementsByClassName("movies-List").append(`<div id="movie-slot" style="margin: 10vw; width:30vw;" >
    <a href=movie.html target="_blank"><img src=${movie.Poster}/></a>
    <p ><b> Title - &nbsp${movie.Title}</b></p>
    <p><b>Language - &nbsp${movie.Language}</b></p>
    <p><b> Plot-&nbsp${movie.Plot}</b></p>
    <button onclick="remove('${movie.Title}')">Remove from my Favourite</button> </div>
    </div>`);
}


// i can not provide a data to remove button 
function remove(data){
    console.log(data);
    // console.log(current);
    let fav_movie=JSON.parse ( localStorage.getItem("fav_movies"));
    fav_movie=fav_movie.filter(movie => movie.Title!=data);
    console.log(fav_movie);
    localStorage.setItem("fav_movies",JSON.stringify(fav_movie));
    alert("this movie is removed from your favourite list");
   location.reload();
}