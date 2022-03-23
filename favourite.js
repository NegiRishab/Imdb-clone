


// (1) movies are stored in localStorage now we colledt them in fav_movie varaible 

console.log(localStorage.getItem("fav_movies"))
let fav_movie = JSON.parse(localStorage.getItem("fav_movies"));


// (2) and create new movies in my favorite page 
var list = document.getElementById("movies-List")
for (let movie of fav_movie) {

    // console.log(current);
    let newmovie = document.createElement('div');
    var movieinfo = `<div id="movie-slot" style="margin: 10vw; width:30vw;" >
    <a href=movie.html target="_blank"><img src=${movie.Poster}/></a>
    <p ><b> Title - &nbsp${movie.Title}</b></p>
    <p><b>Language - &nbsp${movie.Language}</b></p>
    <p><b> Plot-&nbsp${movie.Plot}</b></p>
    <button onclick="remove('${movie.Title}')">Remove from my Favourite</button> </div>
    </div>`;
    newmovie.innerHTML = movieinfo;
    list.append(newmovie);

}


//  (3) this is a remove function  using this function we can delete and movie from my favorite list 
function remove(data) {

    console.log(data);
    // console.log(current);
    let fav_movie = JSON.parse(localStorage.getItem("fav_movies"));
    fav_movie = fav_movie.filter(movie => movie.Title != data);
    console.log(fav_movie);
    localStorage.setItem("fav_movies", JSON.stringify(fav_movie));
    alert("this movie is removed from your favourite list");
    location.reload();
}