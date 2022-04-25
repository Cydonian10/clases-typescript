
interface ModelContraro {
  name: string;
}

class MyDate implements ModelContraro {

  name: string = 'gabriel';

  get isYearBisiesto () {
    if ( this.year % 400 === 0 ) return true;
    if ( this.year % 100 === 0 ) return false;
    return this.year % 4 === 0;
  }

  constructor( private year: number, private _day: number, private month: number ) { }

  printFormat (): string {
    const _day = this.addPadding( this._day );
    const month = this.addPadding( this.month );
    return `La fecha es ${ this.year }/${ _day }/${ month }`;
  }

  private addPadding ( value: number ): string {
    const rpta = value < 10 ? `0${ value }` : `${ value }`;
    return rpta;
  }
}

const myDate = new MyDate( 2001, 4, 1 );

console.log( myDate.printFormat() );
console.log( myDate.isYearBisiesto );
