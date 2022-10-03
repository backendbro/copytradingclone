class WithDrawalService {
    async bank(req,res){
        const user = await User.findById(req.user.id)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        
    }   
}

module.exports = new WithDrawalService()