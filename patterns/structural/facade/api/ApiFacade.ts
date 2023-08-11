class ApiFacade {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get(path: string) {
    console.log(`${this.baseUrl}${path}에 get 요청`);
  }

  post(path: string, data: any) {
    console.log(`${this.baseUrl}${path}에 post 요청`);
  }

  getUser() {
    return this.get('/user');
  }

  createUser(data: { username: string; password: string }) {
    return this.post('/user', data);
  }
}

export default ApiFacade;
