const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",          // default postgres user
  host: "localhost",         // default host
  database: "todo",          // your db name
  password: "veltris@123",   // your password
  port: 5432,                // default postgres port
});

pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch(err => console.error("❌ DB Connection Failed", err));

module.exports = pool;
