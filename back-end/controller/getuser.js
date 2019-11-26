var User =  require('../models/user')

function findUser(usernamei) {
    return new Promise((resolve, reject)=>{
        User.findOne({ username: usernamei }, function(err, data) {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

module.exports = findUser
