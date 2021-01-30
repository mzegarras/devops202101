
const express = require('express')
const Program = require('../model/program');
const _ = require('underscore');

const app = express();



app.get('/programs',function(rq,rs){
    
    let page = rq.query.page||1;
    page = Number(page)-1;

    let size = rq.query.size||5;

    size = Number(size);

    //'nombre email role estado google img'
    Program.find({})
        .skip((page)*size)
        .limit(size)
        .exec((err,programs)=>{

            if(err){
                return rs.status(400)
                  .json({
                      ok: false,
                      err
                  })
            }

            Program.count({},(err,count)=>{

                rs.json({
                    ok: true,
                    programs,
                    count
                });

            });
            
        })


})



app.post('/programs',function(rq,rs){
    
    let body = rq.body;

    let program = new Program({
        nombre_copy: body.nombre_copy,
        programa: body.programa,
        funcionalidad: body.funcionalidad,
        entrada: body.entrada,
        salida: body.salida,
        bus_codigo: body.bus_codigo,
        bus_version: body.bus_version,
        bus_framework: body.bus_framework,
        bus_identificador: body.bus_identificador,
        api: body.api
    });
    

    program.save((err,programDB)=>{

        if(err){
            return rs.status(400)
              .json({
                  ok: false,
                  err
              })
        }

        rs.json({
            ok: true,
            program: programDB
        });

    })
    
})



app.put('/programs/:id',function(rq,rs){

    let id = rq.params.id;
    let body = _.pick(rq.body,["nombre_copy","programa","funcionalidad","entrada","salida",
                               "bus_codigo","bus_version","bus_framework","bus_identificador","api"]);

    

    Program.findByIdAndUpdate(id,body,{new: true,runValidators: true},(err,programDB)=>{

        if(err){
            return rs.status(400)
              .json({
                  ok: false,
                  err
              })
        }

        if(!programDB){
            return rs.status(404)
              .json({
                  ok: false,
                  err:{
                      message: "Program not found"
                  }
              })
        }

        rs.json({
            ok: true,
            program: programDB
        });


    });
})


app.delete('/programs/:id',function(rq,rs){
    
    let id = rq.params.id;
    Program.findByIdAndRemove(id,(err,programDB)=>{

        if(err){
            return rs.status(400)
              .json({
                  ok: false,
                  err
              })
        }


        if(!programDB){
            return rs.status(404)
              .json({
                  ok: false,
                  err:{
                      message: "Program not found"
                  }
              })
        }

        rs.json({
            ok: true,
            program: programDB
        });


    });
})


module.exports = app;