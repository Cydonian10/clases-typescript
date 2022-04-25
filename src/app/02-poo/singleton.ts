export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}

  static create(value: string) {
    if (MyService.instance) {
      MyService.instance = new MyService(value);
    }
    return MyService.instance;
  }

  getName() {
    return this.name;
  }
}

const myService1 = MyService.create("service 1");
const myService2 = MyService.create("service 2");

console.log(myService1 === myService2);
