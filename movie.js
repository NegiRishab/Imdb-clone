var url=localStorage.getItem("Poster");
var title=localStorage.getItem("Title")
var plot=localStorage.getItem("Plot");
var language=localStorage.getItem("Language");
var movie=document.getElementById('movies');
console.log(url);
movie.append(`<div style="margin-left: 10vw; width:30vw;" >
<img src=${url}/>
<p ><b> Title - &nbsp${title}</b></p>
<p><b>Language - &nbsp${language}</b></p>
<p><b>${plot}</b></p>
</div>`);