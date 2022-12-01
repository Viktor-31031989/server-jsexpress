export default function home(req, res) {
  res.status(200).json({
    name: 'Viktor',
    components: ['car', 'home', 'baby'],
    q: true,
  });
}
