import "../component/searchBar.js";

function main() {
  let posterBaseUrl;

  const getConfiguration = () => {
    fetch(
      `https://api.themoviedb.org/3/configuration?api_key=b31aa11315dcfc777d65c273ea683904`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        posterBaseUrl =
          responseJson.images.secure_base_url +
          responseJson.images.poster_sizes[3];
        getFilm();
      })
      .catch((error) => {
        console.error(error);
        showResponseMessage(error);
      });
  };

  const getFilm = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=b31aa11315dcfc777d65c273ea683904&language=en-US&page=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllFilms(responseJson.results);
        }
      })
      .catch((error) => {
        console.error(error);
        showResponseMessage(error);
      });
  };

  const renderAllFilms = (films) => {
    const listFilmElement = document.querySelector("#listFilm");
    listFilmElement.innerHTML = "";

    films.forEach((film) => {
      listFilmElement.innerHTML += `
          <div class="col-sm-4">
            <div class="card mb-4">
              <img class="card-img-top" src="${posterBaseUrl}${film.poster_path}" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">${film.title}</h5>
                <p class="card-text">
                  ${film.release_date}
                </p>
              </div>
            </div>
          </div>
        `;
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  getConfiguration();
}
export default main;
