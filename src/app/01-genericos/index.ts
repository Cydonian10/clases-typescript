import axios from "axios";
function getValue<T>(value: T): T {
  return value;
}

console.log(getValue<string>("hola").charAt(1));

class BaseHttpService<T> {
  data: T[] = [];

  constructor(private url: string) {}

  getAll() {
    return axios.get<T[]>(this.url).then((resp) => resp.data);
  }

  update<ID, DTO>(id: ID, changes: DTO) {
    return axios.put(`${this.url}/${id}`, changes).then((resp) => resp.data);
  }
}

class ProductHttpService extends BaseHttpService<Product> {
  otroRequest() {}
}

const url = "https://api.escuelajs.co/api/v1/products";

const service = new ProductHttpService(url);

service.getAll().then((r) => console.log(r));
