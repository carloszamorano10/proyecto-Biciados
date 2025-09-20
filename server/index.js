const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config()

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_URL
})
const app = express();
app.use(cors());

app.listen(3000, async() => {
  console.log("servidor funcionando");
  try {
    const res = await pool.query("SELECT NOW()")
    console.log("base de datos conectada en la siguiente fecha: " + JSON.stringify(res.rows[0]))
  } catch (error) {
    console.log("error en la conexión a la base de datos")
  }
});

app.get("/", (req, res) => {
  res.send("servidor funcionando");
});
app.get("/hora", async(req, res)=>{
  const response = await pool.query("SELECT NOW()")
  const hora = response.rows[0].now
  res.json(hora)
})