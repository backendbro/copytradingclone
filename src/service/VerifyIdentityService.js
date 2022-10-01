class VerifyIdentityService {
    
    async verifyIDRegister (req,res) {
        console.log(req.files)
    }

    async verifyIDLoggedInUser(req,res) {
        console.log(req.files)
    }
}

module.exports = VerifyIdentityService