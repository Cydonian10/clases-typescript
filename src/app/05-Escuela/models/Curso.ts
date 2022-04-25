interface CursoProps {
  name: string;
  duration: number;
  profesor: string;
}

export class Curso {
  name: string;
  duration: number;
  profesor: string;

  constructor({ name, duration, profesor }: CursoProps) {
    this.name = name;
    this.duration = duration;
    this.profesor = profesor;
  }
}
