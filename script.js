



//   (1)  there i collect all dom elements in specific manner 

var input = document.getElementById("movie-name");
var image = document.getElementById("movies")
var favorite = document.getElementById("myfavourite")
var currmovies;
var submit = document.getElementById("submit");






let m_name = "";
document.getElementById("movie-name").addEventListener("keypress", function (e) {
    m_name += e.key;
    console.log(m_name);
    //    let url="http://www.omdbapi.com/?t="+m_name+"&apikey=dcf45266";


    var xhr = new XMLHttpRequest();
    xhr.open("get", "http://www.omdbapi.com/?t=" + m_name + "&apikey=dcf45266");
    xhr.send();

    xhr.onload = function (data) {
        var data = JSON.parse(xhr.response);
        console.log("movie name" + " " + data.Title);
    }
})





//  (2) when i write movie in input box and click on submit this function call 
    submit.addEventListener("click", function (e) {
    m_name = "";
    e.preventDefault();


    // (2.1) here we delete last movie
    const list = image;
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    // (2.2) now we collect movie name 

    var moviename = input.value;
    input.value == "";
    console.log(input.value);

    // console.log(moviename);
    // (2.3) this is message to user if they did not fill movie name and click on submit button 

    if (moviename === "") {
        alert("please Enter valid movie name");
        return;
    }

    //  (2.4) now we call ajax request to get movie through api 

    var xhrreq = new XMLHttpRequest();


    xhrreq.open("get", "http://www.omdbapi.com/?t=" + moviename + "&apikey=dcf45266");
    xhrreq.send();
    xhrreq.onload = function (data) {
        var data = JSON.parse(xhrreq.response);
        localStorage.setItem("data", data.message);
        localStorage.setItem("Plot", data.Plot);
        localStorage.setItem("Poster", data.Poster);
        localStorage.setItem("Language", data.Language);
        localStorage.setItem("Title", data.Title);



        if (data.Response === "False") {
            alert("this movie is not available");
            return;
        }

        currmovies = "";
        currmovies = data;
        let div1 = document.createElement('div');
        //    (2.5) when we have movie information then we create new container in movies container with all information
        let newmovie = `<div ><a href=movie.html  target="_blank"> <img src=${data.Poster} style="margin=10vh"/></a>
    <br>  <p>ImdbRating &nbsp${data.imdbRating} &nbsp Runtime&nbsp${data.Runtime} </p>
    <button onclick=myList() id="favourite">Add to my Favourite</button></div>`;
        div1.innerHTML = newmovie
        image.appendChild(div1);
    }
});




//  (3) this function made for favorite list when we click on favorite button this function call 

function myList() {



    var storedmovies = [];

    // (3.1) here we add all favorite movies in a array 
    if (localStorage.getItem('fav_movies') !== null) {

        storedmovies = JSON.parse(localStorage.getItem("fav_movies"));
    } else {
        localStorage.setItem("fav_movies", JSON.stringify(storedmovies));
    }


    //  (3.2) here we check is movie add before then we do not add again 

    for (let check of storedmovies) {

        if (check.Title === currmovies.Title) {
            alert("movie already exist");
            return;
        }
    }

    storedmovies.push(currmovies);
    alert("movies added to favourite list");
    localStorage.setItem("fav_movies", JSON.stringify(storedmovies));
};
