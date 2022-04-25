// const persona = {
//   nombre: "",
//   apellido: "",
//   edad: 0
// };

// let names = [ "jaun", "pedro", "hecotr" ];


// const jon = new Proxy( names, {
//   get: function( target, property ) {
//     return property === 'length' ? target.length : target[ Number( property ) ].toUpperCase();
//   },
//   set: ( target, property, value ): any => {
//     if ( typeof value === 'string' ) {
//       target.push( value );
//     }
//   }
// } );


// for ( let i = 0; i < jon.length; i++ ) {
//   console.log( jon[ i ] );
// }