// (1) when we click on movie this page open and we give  information about movie in detail..  

var url=localStorage.getItem("Poster");
var title=localStorage.getItem("Title")
var plot=localStorage.getItem("Plot");
var language=localStorage.getItem("Language");
var movie=document.getElementById('movie');
console.log(movie);
var movieinfo=document.createElement('div');
let newmovie=`<div style="margin-left: 10vw; width:30vw;" >
<img src=${url}/>
<p ><b> Title - &nbsp${title}</b></p>
<p><b>Language - &nbsp${language}</b></p>
<p><b>${plot}</b></p>
</div>`;
movieinfo.innerHTML=newmovie;
movie.append(movieinfo);
