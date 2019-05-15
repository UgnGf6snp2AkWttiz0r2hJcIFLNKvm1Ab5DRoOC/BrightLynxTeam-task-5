const express = require('express');
const bodyParser = require('body-parser');
const {Pool, Client} = require('pg')


const app = express();
// const connectionString = "postgres://postgres:nZXdi@database.minbulat.ru:5432/BrightLynxTeam";
const pool = new Pool({
    user: 'postgres',
    host: 'database.minbulat.ru',
    database: 'BrightLynxTeam',
    password: 'nZXdi',
    port: 5432,
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('API');
});

app.get('/users/', (req, res) => {
    const selectAllUsersQuery = "SELECT * FROM users";

    pool.query(selectAllUsersQuery, (err, users) => {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(users.rows.map(user => ({id: user.id, name: user.name, email: user.email})));

    })

});

app.post('/users/', (req, res) => {

    const {email, name, password} = req.body;

    if (!email || !name || !password) {
        res.status(400).send({error:'Empty'});
    } else {
        const searchQuery = `SELECT * FROM users WHERE email like '${email}'`;
        pool.query(searchQuery, (err, users) => {
            if (err) {
                console.log(err);
                res.status(400).send({error: 'error-select'});
            }
            if (users.rows.length > 0) {
                res.status(400).send({error: 'user already exists'});
            } else {
                const insertQuery = `INSERT INTO users (email,name,password) values ('${email}','${name}','${password}')`;
                pool.query(insertQuery, (err) => {
                    if (err) {
                        console.log(err);
                        res.status(400).send({error:'error-insert'});
                    }
                    res.status(200).send({ok: true});

                })
            }
        })
    }
});

app.post('/auth/', (req, res) => {

    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400).send({error:'Empty'});
    } else {

        const loginQuery = `SELECT * FROM users WHERE email like '${email}' and password like '${password}'`
        pool.query(loginQuery, (err, users) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            if (users.rows.length > 0) {
                res.status(200).send({auth: true});
            } else {
                res.status(200).send({auth: false});
            }

        })
    }
});

app.listen(3000, () => console.log('Listening on port 3000!'));

