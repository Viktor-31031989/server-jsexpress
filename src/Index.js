const express = require('express');
const app = express();
const PORT = 3000;

function home(req, res) {
  res.send('Hello mr Viktor!');
}

function info(req, res) {
  const a = 123;
  const b = Math.random();
  const c = a + b;
  res.send('info here!' + c);
}

function post(req, res) {
  res.send('patch here!');
}

function deleteSomething(req, res) {
  res.send('deleted something!');
}

app.get('/', home);
app.get('/info', info);
app.post('/post', post);
app.delete('/delete', deleteSomething);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
