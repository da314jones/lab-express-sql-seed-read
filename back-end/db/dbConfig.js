require("dotenv").config();
const pgp = require("pg-promise")();
console.log(process.env.PG_HOST);
console.log(process.env.PG_PORT);
console.log(process.env.PG_DATABASE);
console.log(process.env.PG_USER);


console.log(process.env.PG_HOST, process.env.PG_PORT, process.env.PG_DATABASE, process.env.PG_USER);


const cn = {
    host: process.env.PG_HOST, 
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
}

const db = pgp(cn);

console.log(`Connected to database ${process.env.PG_DATABASE} on ${process.env.PG_HOST}:${process.env.PG_PORT}`);


module.exports = db;