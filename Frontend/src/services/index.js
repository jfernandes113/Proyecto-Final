import axios from "axios";
import { getSalaries } from "./salaries";
import { getRents } from "./rents";

const client = axios.create({
  baseURL: 'http://localhost:4000/',
  withCredentials: false
});

const salaries = {
  getSalaries: getSalaries(client)
};


const rents = {
  getRents: getRents(client)
};

export { salaries, rents };