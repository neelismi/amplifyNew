const mysql = require('mysql');

const con = mysql.createConnection({
    host: "web-scraper.c78qxjw1gccg.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Capstone2020"
});

con.connect(function(err) {
    if (err) throw err;

    con.query('CREATE DATABASE IF NOT EXISTS main;');
    con.query('USE main;');
    con.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(30), email varchar(255), age int, PRIMARY KEY(id));', function(error, result, fields) {
        console.log(result);
    });
    con.end();
});