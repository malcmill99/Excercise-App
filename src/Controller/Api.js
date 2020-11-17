const axios = require('axios');
const backend_url = "http://localhost:3333"; 
export function login(email, password){
  try {
     return axios.get(backend_url+"/login", {headers: {'email': email, 'password': password}});
  } catch (error) {
      console.log(error)
  }
}