const searchedTitle = document.getElementById("searchBar");
const searchedResult = document.getElementById("searchResult");
const detailedInfo = document.getElementById("details");
const searchBtn = document.getElementById("searchBtn");
const errorMsg = document.getElementById("errorMsg");
//  http://www.omdbapi.com/?i=tt3896198&apikey=fbbdc2e4

const getMovie = async (searchMethod, searchValue) => {
   try {
      const res = await fetch(
         `http://www.omdbapi.com/?${searchMethod}=${searchValue}&apikey=fbbdc2e4`
      );
      const data = await res.json();
      return data;
   } catch (error) {
      errorMsg.style.display = "block";
      errorMsg.textContent = "Network error , check your internet connection";
   }
};
const searchResult = async () => {
   const searchResults = await getMovie("s", searchedTitle.value);
   if (searchResults.Response == "True") {
      errorMsg.style.display = "none";
      searchedResult.innerHTML = searchResults.Search.map((result) => {
         return `<div><p>${result.Title} <p/><span>${result.Year}</span></div>`;
      }).join("");
   } else {
      errorMsg.style.display = "block";
      errorMsg.textContent = searchResults.Error;
   }
};
const movieDetail = async (title) => {
   const movieInfo = await getMovie("t", title);
   detailedInfo.innerHTML = `<div>
          <p>Title : ${movieInfo.Title}</p>
          <img src=${movieInfo.Poster}/>
          <p>Genre : ${movieInfo.Genre}</p>
          <p>Release date : ${movieInfo.Released}</p>
          <p>Plot : ${movieInfo.Plot}</p>
     </div>
     `;
};
searchBtn.onclick = () => {
   detailedInfo.style.display = "none";
   searchedResult.style.display = "block";
   searchResult();
};
searchedResult.addEventListener("click", (event) => {
   const title = event.target.textContent;
   detailedInfo.style.display = "block";
   searchedResult.style.display = "none";
   movieDetail(title);
});
