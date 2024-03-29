import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzcxMTA2ZDE1MWJhNWExZjgzYjQ3ZGI4MTJkYzUxNiIsInN1YiI6IjY1ZTFjNWVkNmM0NDljMDE4NmZhN2FmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Yq8nRYeMf3hOhSqJPSbGoDXNJMhK3dGKd0MfI_UC-4'
  }

});

export default api;