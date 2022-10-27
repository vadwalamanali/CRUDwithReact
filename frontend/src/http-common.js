import axios from "axios";

export default axios.create({
  //baseURL: 'https://api.example.com',
  headers: {
    "Content-type": "application/json"
  }
});
