import axios from 'axios'

// axios.default.baseURL = 'http://localhost:8000/';
axios.default.baseURL = 'https://spring-fw.herokuapp.com/user';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');