const express = require('express')
const mySql = require('mysql2')

const app = express()

const pool = mySql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'titmit1102',
        database: 'iot',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
module.exports = pool


