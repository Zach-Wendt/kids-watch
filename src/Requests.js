const key = ''

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1&certification_country=US&certification=G&include_adult=false`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&&certification_country=US&certification=G&include_adult=false`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2&&certification_country=US&certification=G&include_adult=false`
};

export default requests;
