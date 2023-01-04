import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

const create = (personObj) => {
  const request = axios.post(baseUrl, personObj)
    return request.then(res => res.data)
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getAll,
  create,
}