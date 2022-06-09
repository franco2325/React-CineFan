const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '647e2d6ce4e1a6848a1b1c26a3107048',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig
