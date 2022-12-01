export default function post(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  const sum = a + b;
  res.send('patch here!' + sum);
}
