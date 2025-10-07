let movieArray = [];

function addMovie(){
    const nameInput = document.getElementById("movie-name").value.trim();

    if(nameInput !== ""){
        movieArray.push({ name: nameInput });
        document.getElementById("movie-name").value = "";
        displayMovie();
    }
    else{
        alert("Please enter a movie title");
    }
}

function removeMovie(index){
movieArray.splice(index, 1);
displayMovie();
}

function displayMovie(movieList = movieArray){
    const movieListElement = document.getElementById("movie-list");
    movieListElement.innerHTML="";

    movieList.forEach((movie, index)=>{
        const li = document.createElement("li");
        li.innerHTML = `${movie.name} <button onclick=removeMovie(${index})>Watched</button>`;
        movieListElement.appendChild(li);
    })
}

