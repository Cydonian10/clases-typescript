import { faker } from '@faker-js/faker';
import { TipoJornadaEnum } from './TipoJornada';
import { Asignatura } from './Asignatura';
import { Alumno } from './Alumno';
export class Salones {

  id: string = faker.datatype.uuid();
  private _jornada: TipoJornadaEnum;
  private _nombre: string;
  private _asignaturas: Asignatura[] = [];
  private _alumnos: Alumno[] = [];

  constructor( jornada: TipoJornadaEnum, nombre: string, asignaturas: Asignatura[] = [], alumnos: Alumno[] = [] ) {
    this._jornada = jornada; this._nombre = nombre;
    this._asignaturas = asignaturas; this._alumnos = alumnos;
  }


  public get jornada (): TipoJornadaEnum {
    return this._jornada;
  }
  public set jornada ( value: TipoJornadaEnum ) {
    this._jornada = value;
  }

  public get nombre (): string {
    return this._nombre;
  }
  public set nombre ( value: string ) {
    this._nombre = value;
  }
  public get asignaturas (): Asignatura[] {
    return this._asignaturas;
  }
  public set asignaturas ( value: Asignatura[] ) {
    this._asignaturas = value;
  }
  public get alumnos (): Alumno[] {
    return this._alumnos;
  }
  public set alumnos ( value: Alumno[] ) {
    this._alumnos = value;
  }
}