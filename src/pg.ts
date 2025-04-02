import postgres from 'postgres'
// Documentation https://github.com/porsager/postgres

// On créait un driver Postgres pour communiquer avec la base de données.
const sql = postgres({
    host      : 'localhost',
    port      : 5432,
    database  : Bun.env.PG_DB,
    username  : Bun.env.PG_USER,
    password  : Bun.env.PG_PASS
})

export default sql;