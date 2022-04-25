import { SocialMedia } from "./SocialMedia";
import { LearningPath } from "./LearningPath";
import { Curso } from "./Curso";

interface StudentProps {
  name: string;
  age: number;
  email: string;
  socialMedia: SocialMedia;
}

class Student {
  name: string;
  age: number;
  email: string;
  socialMedia: SocialMedia;
  private learningPaths: Array<LearningPath> = [];
  private cursosAprobados: Array<Curso> = [];

  constructor({ name, age, email, socialMedia }: StudentProps) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.socialMedia = socialMedia;
  }

  aprobarCurso(nuevoCurso: Curso) {
    this.cursosAprobados.push(nuevoCurso);
  }

  addLearningPath(learning: LearningPath) {
    this.learningPaths.push(learning);
  }
}

const juanita = new Student({
  name: "gabriel",
  age: 16,
  email: "pelos@hotmail.com",
  socialMedia: new SocialMedia("twitter", "@pedrito"),
});

const typescript = new Curso({ name: "typescript", duration: 123, profesor: "nicolas molina" });

const escuelaDesarrolloWeb = new LearningPath({ name: "escuela de desarrollo web" });
escuelaDesarrolloWeb.addCurso(typescript);

juanita.aprobarCurso(typescript);
juanita.addLearningPath(escuelaDesarrolloWeb);
console.log(juanita);

// const courseForm = document.getElementById("formCourse") as HTMLFormElement;

// courseForm.addEventListener("submit", (e: Event) => {
//   e.preventDefault();
//   const formData = new FormData(e.target as HTMLFormElement);
// });

class FreeStuden extends Student {
  constructor(props: StudentProps) {
    super(props);
  }
}

const free = new FreeStuden({
  name: "juan",
  age: 16,
  email: "pelos@hotmail.com",
  socialMedia: new SocialMedia("twitter", "@pedrito"),
});
free.addLearningPath(escuelaDesarrolloWeb);
console.log(free);
