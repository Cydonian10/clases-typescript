import axios from "axios";

interface Resp {
  info: string;
  results: Array<IPersonaje>;
}

interface IPersonaje {
  name: string;
}

function getProducts() {
  return axios
    .get<Resp>("https://rickandmortyapi.com/api/character")
    .then((resp) => resp.data.results);
}

getProducts().then((resp) => {
  console.log(resp[0].name);
});
