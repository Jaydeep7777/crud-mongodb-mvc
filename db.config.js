import { createConnection } from 'mysql';

const dbConn = createConnection({
    host:'localhost',
    user: 'root',
    password : '',
    database : 'userdb'
});

dbConn.connect((err) => {
    if(!err){
        console.log("database successfully connected.");
    }else{
        throw err;
    }
});

export default dbConn;