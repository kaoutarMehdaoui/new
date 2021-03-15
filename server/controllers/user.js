const user = require('../models/user');
const userSchema = require('../models/user');

const find = async (req, result) => {
    const users = await userSchema.find();
    let pagedUsers;
    if (req.query.page) {
        pagedUsers = users.slice((req.query.page - 1) * req.query.size, req.query.page * req.query.size);
    } else {
        pagedUsers = users;
    }
    result.status(200).send(pagedUsers);
}
const count = async (request,result) =>{
    const total = await userSchema.count();
    result.status(200).send({total});
}
const create = async (result,request) =>{
    const user = request.body;
    const userData = await userSchema.create(user);
    result.status(201).send(userData);
}
const findone = async (req,res) => {
    const user = await userSchema.findById(req.params.id)
    res.status(200).send(user);
}

const update = async(res,req) => {
const id = req.params.id;
const body = req.body;
await userSchema.findByIdAndUpdate(id,body);
res.status(201).send(body)
}

const deleteone = async(res, req) => {
    const id =req.params.id;
await userSchema.findByIdAndRemove(id);
res.status(201).send({done :'true'});
}

module.exports = { find , create , findone , update,deleteone,count}