import { Roles, User } from './01-enum';

export const createProduct = ( id: string | number, stock: number, isNew?: boolean ) => {
  return {
    id,
    stock: stock ?? 10, /** Nullins colection */
    isNew: isNew ?? true
  };
};

// 0 === false
// '' === false
// false === false

// console.log( createProduct( 1, 0, false ) );


/**
 * !Parametros Rest
 */


const currentUser: User = {
  username: "Gabriel",
  role: Roles.ADMIN
};

export const checkRole = ( ...roles: Roles[] ) => {
  if ( roles.includes( currentUser.role ) ) {
    return true;
  }
  return false;
};

const rpt = checkRole( Roles.SELLER, Roles.CUSTOMER );

console.log( rpt );
