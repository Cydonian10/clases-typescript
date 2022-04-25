import { TipoEscuelaEnum } from './TipoEscuela';
import { faker } from '@faker-js/faker';
import { Salones } from './Salones';

export class Escuela {
  public id: string = faker.datatype.uuid();
  private _name: string;
  private _anioDeCreacion: number;
  private _pais: string;
  private _tipoEscuela: TipoEscuelaEnum;
  private _salones: Salones[];

  constructor( name: string, anio: number, pais: string, tipo: TipoEscuelaEnum, salones?: Salones[] ) {
    this._name = name; this._anioDeCreacion = anio; this._pais = pais;
    this._tipoEscuela = tipo; this._salones = salones ? salones : [];
  }

  public get salones (): Salones[] {
    return this._salones;
  }
  public set salones ( value: Salones[] ) {
    this._salones = value;
  }

  public get pais (): string {
    return this._pais;
  }

  public set pais ( value: string ) {
    this._pais = value;
  }

  public get tipoEscuela (): TipoEscuelaEnum {
    return this._tipoEscuela;
  }
  public set tipoEscuela ( value: TipoEscuelaEnum ) {
    this._tipoEscuela = value;
  }

  public get anioDeCreacion (): number {
    return this._anioDeCreacion;
  }
  public set anioDeCreacion ( value: number ) {
    this._anioDeCreacion = value;
  }

  public get name (): string {
    return this._name;
  }
  public set name ( value: string ) {
    this._name = value;
  }



}