import * as pg from "pg";
async function getCarByName(name: string) {
  const db = new pg.Client({
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    ssl: true,
  });
  await db.connect();
  const query = await db.query("SELECT * FROM car WHERE name = $1", [name]);
  console.log(query.rows);
  return query.rows;
}
export default getCarByName;
