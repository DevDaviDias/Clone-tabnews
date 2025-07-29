export default function handler(req, res) {
  const agora = new Date().toLocaleString("pt-BR");
  res.status(200).send(`Horário atual: ${agora}`);
}