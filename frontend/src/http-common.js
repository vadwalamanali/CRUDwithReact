import axios from "axios";

export default axios.create({
  baseURL: "https://reactnode-crud-application.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
