import axios from 'axios';

const apiKey = '6385de4a6b79a39711a43f65c5adaee5';

export default axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params:{
        api_key:apiKey,
    }
  });