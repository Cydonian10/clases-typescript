import { faker } from "@faker-js/faker";

export class Asignatura {
  id: string = faker.datatype.uuid();
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
