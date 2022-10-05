import axios from "axios";


// Url used for the base of all database request strings
 
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;