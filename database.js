const {createPool} = require('mysql');
const db = createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud_node_db',
    connectionLimit: 15
});
module.exports = {db};