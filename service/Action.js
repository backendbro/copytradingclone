const Action = require('../models/Action')
const UserModel = require('../models/UserModel')

class ActionService  {

    async getAction (req,res) {
        const actions = await Action.find()
        res.status(200).json({message:'ACTIONS', actions})
    }

    async createAction(req,res) {
        const action = await Action.create(req.body)
        res.status(200).json({message:"ACTION", action})
    }
    async deleteAction(req,res) {
        const {id} = req.body

    //    const actionExist = await Action.findById(id)
    //    if(!actionExist){
    //     return res.status(404).json({message:"ACTION DOES NOT EXIST"})
    //    }

       const action = await Action.findOneAndDelete({_id:id})
       res.status(200).json({message:'ACTION DELTED', action})
    }

}


module.exports = new ActionService()