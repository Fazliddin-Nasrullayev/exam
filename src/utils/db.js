const Pool = require('pg').Pool

const pool = new Pool({connectionString : "postgres://djzavbjf:QNApUJgl8UvZbZ5ZmZPq71VP8_erJAl4@peanut.db.elephantsql.com/djzavbjf" })



 const fetchdata = async (SQL, ...params) => {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params.length ? params : null )         
        return rows        
    }finally {
        client.release()
    }
}

module.exports = {fetchdata}