export default function handler(req, res) {
 const agora = new Date();
  const horaAtual = agora.toLocaleTimeString("pt-BR");
  res.status(200).send(`${horaAtual}`);
}