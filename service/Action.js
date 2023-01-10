const Action = require('../models/Action')
const UserModel = require('../models/UserModel')

class ActionService  {

    async getAction (req,res) {
        const actions = await Action.find()
        res.status(200).json({message:'ACTIONS', actions})
    }

    async getSingleAction (req,res) {
        const {id} = req.body
        const action = await Action.findById(id)
        if(!action){
            return res.status(404).json({message:"ACTION NOT FOUND"})
        }
        res.status(200).json({message:"SINGLE ACTION", action})
    }

    async createAction(req,res) {
       const action = await Action.create(req.body)
       res.status(200).json({message:"ACTION CREATED", action})
    }

    async updateAction(req,res) {
        const {id} = req.body

       const actionExist = await Action.findById(id)
       if(!actionExist){
        return res.status(404).json({message:"ACTION DOES NOT EXIST"})
       }

       const action = await Action.findByIdAndUpdate(id, req.body, {new:true})
       res.status(200).json({message:"ACTION UPDATED", action})
    }

    async deleteAction(req,res) {
        const {id} = req.body

       const actionExist = await Action.findById(id)
       if(!actionExist){
        return res.status(404).json({message:"ACTION DOES NOT EXIST"})
       }

       const action = await Action.findOneAndDelete({_id:id})
       res.status(200).json({message:'ACTION DELTED', action})
    }

}


module.exports = new ActionService()