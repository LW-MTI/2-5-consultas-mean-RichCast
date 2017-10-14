const router = require('express').Router();
const handler = require('../utils/handler');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/unidad2', {
  useMongoClient: true
});

const User = require('../models/user.model');

module.exports = () => {

    router.get('/', (req, res) => {
        User.find({})
        .sort()
        .exec(handler.handleMany.bind(null, 'users', res));
    });

    

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        User.find({_id:id})
        .sort()
        .exec(handler.handleOne.bind(null, 'users', res));
    });

    /*--inserciones--*/

    router.post('/', (req, res) => {
        const usuario = req.body;

        User.create(usuario)
        .then(
            function(data){
                console.log(data);
                res.jason(data);
            }
        )
        .catch(
            function(err){
                console.log(err);
                res.status(400);
                rest.jason({Error:err});

            }
        )
        
    });

   

    /*--Eliminaciones--*/

    router.delete('/:id', (req, res) => {
        const id = req.params.id;

        User.remove({_id:id},function(err,data){
            if(err){
                console.log(err);
                res.status(400);
                res.json({error:err});
            }else{
                res.json({msj:"todo estuvo bien"});
            }
        
        });
        
    });

    return router;
}