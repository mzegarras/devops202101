const express = require('express')
const User = require('../model/users');
const _ = require('underscore');

const app = express();

app.get('/users',function(rq,rs){
    
    let page = rq.query.page||1;
    page = Number(page)-1;

    let size = rq.query.size||5;

    size = Number(size);

    User.find({},'nombre email role estado google img')
        .skip((page)*size)
        .limit(size)
        .exec((err,users)=>{

            if(err){
                return rs.status(400)
                  .json({
                      ok: false,
                      err
                  })
            }

            User.count({},(err,count)=>{

                rs.json({
                    ok: true,
                    users,
                    count
                });

            });

            
        })


})

app.post('/users',function(rq,rs){
    
    let body = rq.body;

    let user = new User({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    });
    

    user.save((err,userDB)=>{

        if(err){
            return rs.status(400)
              .json({
                  ok: false,
                  err
              })
        }

        rs.json({
            ok: true,
            user: userDB
        });

    })
    
})

app.put('/users/:id',function(rq,rs){
    let id = rq.params.id;
    let body = _.pick(rq.body,["nombre","email","img","role","estado"]);

    

    User.findByIdAndUpdate(id,body,{new: true,runValidators: true},(err,userDB)=>{

        if(err){
            return rs.status(400)
              .json({
                  ok: false,
                  err
              })
        }

        if(userDB){
            return rs.status(404)
              .json({
                  ok: false,
                  err:{
                      message: "User not found"
                  }
              })
        }

        rs.json({
            ok: true,
            user: userDB
        });


    });
})

app.delete('/users/:id',function(rq,rs){
    
    let id = rq.params.id;
    User.findByIdAndRemove(id,(err,userDB)=>{

        if(err){
            return rs.status(400)
              .json({
                  ok: false,
                  err
              })
        }


        if(!userDB){
            return rs.status(404)
              .json({
                  ok: false,
                  err:{
                      message: "User not found"
                  }
              })
        }

        rs.json({
            ok: true,
            user: userDB
        });


    });
})


module.exports = app;
