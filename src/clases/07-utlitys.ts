interface Product {
  id: number;
  title: string;
  price: number;
  category: { id: '1', name: 'hola'; };
}

interface CreateDtoProduct extends Omit<Product, 'id' | 'category'> {
  categoryId: string;
}

/**
 * * Tipoar por indice de mi interface
 */
function create ( id: Product[ "id" ] ) {
  console.log( id );
}
/**
 * * Readonly de mis archivos
 */

