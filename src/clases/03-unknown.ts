let unKnownVar: unknown;

unKnownVar = true;

if ( typeof unKnownVar === 'string' ) {
  unKnownVar.toUpperCase();
} else {
  //console.log( 'el valor no es correcto \n' + 'holamundo' );
}


const parse = ( str: string ): unknown => JSON.parse( str );

/**
 * !Never
 */
const fail = ( message: string ) => {
  throw new Error( message );
};

const example = ( input: unknown ) => {
  if ( typeof input === 'string' ) {
    return 'es un string';
  } else if ( Array.isArray( input ) ) {
    return 'es un array';
  }
  return fail( 'not match' );
};

console.log( example( "" ) );
console.log( example( [] ) );
console.log( example( 12 ) ); //! se detienen por el fail
console.log( example( "hola despues de todo" ) );
