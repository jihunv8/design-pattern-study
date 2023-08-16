import App from './App';

const app = new App();

app.use((req, _, next) => {
  console.log();
  console.log('요청 들어옴');
  console.log(req);
  next();
});

app.use((req, res, next) => {
  if (req.name === undefined) {
    res.status = 400;
    res.mesage = '400 Bad Request: name은 필수로 입력해야합니다.';
    res.send();
    return;
  }

  res.mesage += `안녕하세요 ${req.name}님.`;
  next();
});

app.use((req, res, next) => {
  if (req.age !== undefined) res.mesage += `${req.age}세 이시군요.`;
  next();
});

app.use((req, res, next) => {
  if (req.job !== undefined) res.mesage += `${req.job}일 하시군요`;
  next();
});

app.use((_, res) => {
  res.send();
});

app.request({
  name: 'jihun',
  age: 27,
  job: 'dev',
});

app.request({
  name: 'winters',
  job: 'major',
});

app.request({
  age: 40,
  job: 'police',
});
