const key = 'c73cc0e048e3b1e4c09dfa43c5fb77fd';

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1&certification_country=US&certification=G&include_adult=false`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&&certification_country=US&certification=G&include_adult=false`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2&&certification_country=US&certification=G&include_adult=false`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&&certification_country=US&certification=G&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1&certification_country=US&certification=G&include_adult=false`,
};

export default requests;
