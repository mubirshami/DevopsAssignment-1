const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'awseb-e-icqdmepvvx-stack-awsebrdsdatabase-drmovdnnchcc.ctsjtmwqbbki.ap-northeast-1.rds.amazonaws.com',
  user: 'Mubir',
  password: 'shami1981',
  database: 'user'
});

module.exports = connection;