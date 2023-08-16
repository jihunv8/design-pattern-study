interface Request {
  name?: string;
  age?: number;
  job?: string;
}

class Response {
  status = 200;
  mesage = '';
  send() {
    console.log('응답 보냄');

    if (this.status !== 200) {
      console.log('\x1b[31m', this.mesage, '\x1b[37m');
      return;
    }

    console.log('\x1b[34m', this.mesage, '\x1b[37m');
  }
}

type Middleware = (req: Request, res: Response, next: () => void) => void;

class App {
  private index: number = 0;
  private middlewares: Middleware[] = [];

  use(middleware: Middleware): void {
    this.middlewares.push(middleware);
  }

  request(req: Request): void {
    this.index = 0;
    const res = new Response();

    const next = () => {
      this.index += 1;
      if (this.index >= this.middlewares.length) return;
      this.middlewares[this.index](req, res, next);
    };

    this.middlewares[this.index](req, res, next);
  }
}

export default App;
