const Post = require('../models/Post');

module.exports = {
    async index(req, res){

    },
    async store(req, res) {
        console.log(req.body)
        return res.send({ok : true})
    }
};