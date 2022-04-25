export function parseStr ( input: string ): string[];
export function parseStr ( input: string[] ): string;

export function parseStr ( input: string | string[] ): string | string[] {
  if ( Array.isArray( input ) ) {
    return input.join( ' - ' );
  } else {
    return input.split( '' );
  }
}

const rtaString = parseStr( [ 'nico', 'gabriel' ] );
const rtaArray = parseStr( "Gabriel" );
console.log( rtaArray );
console.log( rtaString );