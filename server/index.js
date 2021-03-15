const express = require('express');
const database = require('./database');
const userController = require('./controllers/user');
const config=require('./config');
const cors = require('cors');

const app = express();

app.use(express.json());


app.use(cors());

// start database
database.start();

const port = config.port;

app.get('/users/count', async (req, res, next) => {
    userController.count(req, res);
});

app.get('/users', async (req, res, next) => {
    userController.find(req, res);
});

app.post('/users', async (req, res, next) => {
userController.create(res,req);
});

app.get('/users/:id', async (req, res, next) => {
userController.findone(req,res);
});
app.put('/users/:id', async(req , res , next)=>{
userController.update(res,req);
})
// update (id) (data)
app.delete('/users/:id',async(req,res,next)=>{
userController.deleteone(res,req);
})
// get (id)


app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

