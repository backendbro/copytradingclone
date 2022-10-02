class WithDrawalService {
    async bank(req,res){
        const user = await User.findById(req.user.id)
        
    }
}

module.exports = new WithDrawalService()