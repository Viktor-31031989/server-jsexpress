import User from './Model';

export default function userRegister(req, res) {
  const newUser = new User({
    firstName: req.body.firstName,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json('userRegister here');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('user not created');
    });
}
