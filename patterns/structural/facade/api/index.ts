import ApiFacade from './ApiFacade';

const api = new ApiFacade('https://my-api.com');

api.createUser({ username: 'park', password: 'password1234' });
api.getUser();
