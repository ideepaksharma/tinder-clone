import axios from 'axios'

const instance = axios.create({
    //baseURL: 'http://localhost:8001', for local node js server
    baseURL: 'https://mern-tinderbackend.herokuapp.com', //for deployed node js server on cloud
});

export default instance;