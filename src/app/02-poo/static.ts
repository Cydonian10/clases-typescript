class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.sort((a, b) => b - a);
  }
}

console.log("MyMath", MyMath.PI);
console.log(MyMath.max(1, 6, 7, -11, 9));

/**@Interfaces */
interface Driver {
  database: string;
  pasword: string;
  port: number;
  connect(): void;
  disconnect(): void;
  isConnected(name: string): void;
}

class PostgresDriver implements Driver {
  database: string;
  pasword: string;
  port: number;

  constructor(database: string, password: string, port: number) {
    (this.database = database), (this.pasword = password), (this.port = port);
  }
  connect(): void {}
  disconnect(): void {}
  isConnected(name: string): void {
    console.log(name);
  }
}
