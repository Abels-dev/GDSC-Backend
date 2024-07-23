const searchedTitle = document.getElementById("searchBar");
const searchedResult = document.getElementById("searchResult");
const detailedInfo = document.getElementById("details");
const searchBtn = document.getElementById("searchBtn");
const errorMsg = document.getElementById("errorMsg");
const loadingIndicator = document.getElementById("loading");

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
   loadingIndicator.style.display = "none";
   if (searchResults.Response == "True") {
      errorMsg.style.display = "none";
      searchedResult.style.display = "block";
      searchedResult.innerHTML = searchResults.Search.map((result) => {
         return `<div class="searchedItem"><p class="title">${result.Title} -<p/>
            <span>${result.Year}</span></div>`;
      }).join("");
   } else {
      errorMsg.style.display = "block";
      errorMsg.textContent = searchResults.Error;
      searchedResult.style.display = "none";
   }
};
const movieDetail = async (title) => {
   const movieInfo = await getMovie("t", title);
   loadingIndicator.style.display = "none";
   if (movieInfo.Response == "True") {
      detailedInfo.style.display = "block";
      detailedInfo.innerHTML = `<div>
      <h2><b>Title</b> : ${movieInfo.Title}</h2>
      <img src=${movieInfo.Poster}/>
      <p><b>Type</b> : ${movieInfo.Type}</p>
      <p><b>Genre</b> : ${movieInfo.Genre}</p>
      <p><b>Release date</b> : ${movieInfo.Released}</p>
      <p><b>Plot</b> : ${movieInfo.Plot}</p>
 </div>`;
   }
};
searchBtn.onclick = () => {
   loadingIndicator.style.display = "block";
   detailedInfo.innerHTML = "";
   detailedInfo.style.display = "none";
   searchResult();
};
searchedResult.addEventListener("click", (event) => {
   loadingIndicator.style.display = "block";
   const title = event.target.textContent;
   searchedResult.textContent = "";
   searchedResult.style.display = "none";
   searchedTitle.value = "";
   movieDetail(title);
});
