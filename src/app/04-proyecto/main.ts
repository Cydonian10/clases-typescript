import { ProductHttpService } from "./services/product.service";

const productService = new ProductHttpService();

productService.getAll().then((data) => console.log(data));
