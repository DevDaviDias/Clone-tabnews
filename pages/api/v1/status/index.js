import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 2+2*2 as sum");
  console.log(result.rows);  

  return response.status(200).json({ status: "ok" });
}

export default status;
