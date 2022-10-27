import http from "../http-common";

const getAll = () => {
  return http.get("https://reactnode-crud-application.herokuapp.com/api/tutorials");
};

const get = id => {
  return http.get(`https://reactnode-crud-application.herokuapp.com/api//tutorials/${id}`);
};

const create = data => {
  return http.post("https://reactnode-crud-application.herokuapp.com/api//tutorials", data);
};

const update = (id, data) => {
  return http.put(`https://reactnode-crud-application.herokuapp.com/api//tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`https://reactnode-crud-application.herokuapp.com/api//tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`https://reactnode-crud-application.herokuapp.com/api//tutorials`);
};



const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  
};

export default TutorialService;
