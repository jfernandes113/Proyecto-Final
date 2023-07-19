import axios from "axios";

//import { register, login, logout } from "./auth";
//import { generate } from "./url";
//import { basic, shorts } from "./user";
import { getSalaries } from "./salaries";

const client = axios.create({
  //baseURL: import.meta.env.BACKEND_URL,
  baseURL: 'http://localhost:4000/',
  withCredentials: false, // por ahora
});

/*const auth = {
  register: register(client),
  login: login(client),
  logout: logout(client),
};

const url = {
  generate: generate(client),
};

const user = {
  basic: basic(client),
  shorts: shorts(client),
};*/

const salaries = {
  getSalaries: getSalaries(client)
};

export { salaries };