import { Curso } from "./Curso";

interface LearningProps {
  name: string;
}

export class LearningPath {
  name: string;
  curso: Array<Curso> = [];

  constructor({ name }: LearningProps) {
    this.name = name;
  }

  addCurso(curso: Curso) {
    this.curso.push(curso);
  }
}
