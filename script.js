
// var input= $("#movie-name");
// var image= $("#movies")  
// var favorite=$("#myfavourite")  
  
// var currmovies;
// // var sugg=$#
// // incomplete autocomplete feature 


// // let m_name="";
// // document.getElementById("movie-name").addEventListener("keypress",function(e){
// //     m_name+=e.key;
// //     console.log(m_name);
// //    let url="http://www.omdbapi.com/?t="+m_name+"&apikey=dcf45266";
// //    $.get(url,function(data){
// //        sugg.innerText=( data.Title);
// //        console.log(sugg);
// //        console.log( "movie name"+" "+ data.Title);
// //     })
// // })



// $("#submit").click(function(e){
//     m_name="";
//     e.preventDefault();
//     $("#movies div").remove();

//     var moviename=input.val();
//     console.log(moviename);
//     if(moviename===""){
//         alert("please Enter valid movie name");
//         return;
//     }
//     // console.log(movie);
//     var url="http://www.omdbapi.com/?t="+moviename+"&apikey=dcf45266";


  
//     $.get(url,function(data){
//         // console.log(data);
//         localStorage.setItem("data",data.message);
//        localStorage.setItem("Plot",data.Plot);
//          localStorage.setItem("Poster",data.Poster);
//          localStorage.setItem("Language",data.Language);
//          localStorage.setItem("Title",data.Title);
     
       

//         if(data.Response==="False"){
//             alert("this movie is not available");
//             return;
//         }

//         currmovies="";
//         currmovies=data;
//       console.log(data);
//       image.append(`<div><a href=movie.html  target="_blank"> <img src=${data.Poster} style="margin=10vh"/></a>
//          <br>  <p>ImdbRating &nbsp${data.imdbRating} &nbsp Runtime&nbsp${data.Runtime} </p>
//          <button onclick=myList() id="favourite">Add to my Favourite</button></div>`);
//            }).fail(function(){
//                alert("check your internet_connection");
//             });
//             console.log("yes"+" "+moviename);
//         })

// function myList(){
   
    

//  var storedmovies=[];
 
//     if (localStorage.getItem('fav_movies') !== null) {
        
//          storedmovies=JSON.parse( localStorage.getItem("fav_movies"));
//     } else {
//        localStorage.setItem("fav_movies",JSON.stringify(storedmovies) );
//     }




var input= document.getElementById("movie-name");
var image= document.getElementById("movies")  
var favorite=document.getElementById("myfavourite")  
var currmovies;
var submit=document.getElementById("submit");



let m_name="";
document.getElementById("movie-name").addEventListener("keypress",function(e){
    m_name+=e.key;
    console.log(m_name);
//    let url="http://www.omdbapi.com/?t="+m_name+"&apikey=dcf45266";
 

   var xhr=new XMLHttpRequest();
   xhr.open("get","http://www.omdbapi.com/?t="+m_name+"&apikey=dcf45266");
   xhr.send();

   xhr.onload=function(data){
    var data=JSON.parse(xhr.response);
console.log( "movie name"+" "+ data.Title);
   }
})


submit.addEventListener("click",function(e){
    m_name="";
    e.preventDefault();

    
    const list = image;
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
    

    var moviename=input.value;
    input.value=="";
    console.log(input.value);
    // console.log(moviename);
    if(moviename===""){
        alert("please Enter valid movie name");
        return;
    }

    // console.log(movie);
    // var url="http://www.omdbapi.com/?t="+moviename+"&apikey=dcf45266";

var xhrreq=new XMLHttpRequest();


xhrreq.open("get","http://www.omdbapi.com/?t="+moviename+"&apikey=dcf45266");
xhrreq.send();
xhrreq.onload=function(data){
    var data=JSON.parse(xhrreq.response);
        localStorage.setItem("data",data.message);
       localStorage.setItem("Plot",data.Plot);
         localStorage.setItem("Poster",data.Poster);
         localStorage.setItem("Language",data.Language);
         localStorage.setItem("Title",data.Title);
     
       
    
        if(data.Response==="False"){
            alert("this movie is not available");
            return;
        }
    
        currmovies="";
        currmovies=data;
   
    image.append(`<div ><a href=movie.html  target="_blank"> <img src=${data.Poster} style="margin=10vh"/></a>
    <br>  <p>ImdbRating &nbsp${data.imdbRating} &nbsp Runtime&nbsp${data.Runtime} </p>
    <button onclick=myList() id="favourite">Add to my Favourite</button></div>`);
    }
});
          
   

  

function myList(){
   
    

 var storedmovies=[];
 
    if (localStorage.getItem('fav_movies') !== null) {
        
         storedmovies=JSON.parse( localStorage.getItem("fav_movies"));
    } else {
       localStorage.setItem("fav_movies",JSON.stringify(storedmovies) );
    }

    
    

        for(let check of storedmovies){
           
            if(check.Title===currmovies.Title){
                alert("movie already exist");
                return;
            }
        }
        storedmovies.push(currmovies);
          alert("movies added to favourite list");
        localStorage.setItem("fav_movies",JSON.stringify(storedmovies));         
    };
