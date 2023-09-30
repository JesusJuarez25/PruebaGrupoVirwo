import {createPool} from 'mysql2/promise';
const connection = createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'virwo',
    port: 3306,

    
    
});

export default connection; 