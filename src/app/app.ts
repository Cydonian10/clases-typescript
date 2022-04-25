import { Escuela } from './Entitys/Escuela';
import { TipoEscuelaEnum } from './Entitys/TipoEscuela';
import { Salones } from './Entitys/Salones';
import { TipoJornadaEnum } from './Entitys/TipoJornada';
import { Alumno } from './Entitys/Alumno';

class Main {

  escuela!: Escuela;

  public FunctionMain () {
    this.escuela = new Escuela( 'Platzi', 2001, 'Peru', TipoEscuelaEnum.primaria );
    this.cargarSalones();
  }

  cargarSalones () {
    this.escuela.salones = [
      new Salones( TipoJornadaEnum.dia, '101' ),
      new Salones( TipoJornadaEnum.noche, '201' ),
      new Salones( TipoJornadaEnum.tarde, '301' ),
    ];

    function getRandomInt ( min: number, max: number ) {
      return Math.floor( Math.random() * ( max - min ) ) + min;
    }

    for ( const salon of this.escuela.salones ) {
      salon.alumnos = this.cargarAlumnos( getRandomInt( 10, 20 ) );
    }
  }

  cargarAlumnos ( max: number ): Alumno[] {
    let nombre1 = [ "Alba", "Felipa", "Eusebio", "Farid", "Donald", "Alvaro", "Nicolás" ];
    let apellido1 = [ "Ruiz", "Sarmiento", "Uribe", "Maduro", "Trump", "Toledo", "Herrera" ];
    let nombre2 = [ "Freddy", "Anabel", "Rick", "Murty", "Silvana", "Diomedes", "Nicomedes", "Teodoro" ];
    const lista: Alumno[] = [];
    for ( let i = 0; i < nombre1.length; i++ ) {
      for ( let j = 0; j < nombre2.length; j++ ) {
        for ( let k = 0; k < apellido1.length; k++ ) {
          lista.push( new Alumno( `${ nombre1[ i ] } ${ nombre2[ j ] } ${ apellido1[ k ] }` ) );
        }
      }
    }
    return lista.slice( 0, max );
  }

  reportes () {
    console.log( this.escuela );
  }
}

const app = new Main();
app.FunctionMain();

app.reportes();;