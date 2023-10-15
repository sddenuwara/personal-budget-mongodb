const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const budgetModel = require('./models/budget_schema');
const app = express();
const port = 3000;
let url = 'mongodb://localhost:27017/personal_budget';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/budget/fetch', (req, res) => {
    const budget = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: []
        }]
    };

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            budgetModel.find({})
                .then((data) => {
                    console.log(data);
                    data.forEach(element => {
                        budget.labels.push(element.label);
                        budget.datasets[0].data.push(element.data);
                        budget.datasets[0].backgroundColor.push(element.backgroundColor);
                    });
                    res.json(budget);
                    mongoose.connection.close();
                })
                .catch((connectionError) => {
                    console.log(connectionError);
                })
        })
        .catch((connectionError) => {
            console.log(connectionError);
        });
});

app.post('/api/budget/add', (req, res) => {

    try {
        const { label, data, backgroundColor } = req.body;
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        let newData = new budgetModel({ label, data, backgroundColor });
        budgetModel.insertMany(newData)
            .then((data) => {
                console.log(data);
                res.json({status: 'success'});
                mongoose.connection.close();
            })
            .catch((connectionError) => {
                console.log(connectionError);
            });
    }
    catch (RequestError) {
        console.log(RequestError);
    }

});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});