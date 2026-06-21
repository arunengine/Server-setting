import { Query } from "mongoose"

export const getparams = (req , res )=>{
          res.json({

               params:req.params 

          })
}

export const getQuery = (req,res)=>{
            res.json({
                query : req.query
            })
}

export const getHeaders =(req,res)=>{
         res.json({
            token:req.headers.token
         })
}

export const getBody =(req , res)=>{
            res.json({
                body:req.body
            })
}