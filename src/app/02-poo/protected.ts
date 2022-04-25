class Animal {
  constructor(protected _name: string) {}

  get name() {
    return this._name;
  }

  move() {
    console.log("me estoy moviendo");
  }

  saludo() {
    console.log(`Yo soy ${this._name}`);
  }
}

class Dog extends Animal {
  constructor(_name: string) {
    super(_name);
  }

  move() {
    console.log(`${this._name} se mueve`);
    super.move();
  }
}

const dog = new Dog("marti");
dog.saludo();
dog.move();
