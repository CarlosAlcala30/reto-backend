const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')


function getAll() {
    return Users.find()
 }
 
async function create (usersData) {
    const {email, password} = usersData
    const usersFound =await users.findOne({email})
    if(usersFound) throw new error ('email of users exist already')
 
    const encryptedPasword = await bcrypt.hash(password)
 
    return Users.create({...usersData, password: encryptedPasword})
}
 
 function deleteById(id) {
    return Users.findByIdAndDelete(id)
 }
 
  async function updateById(id, newData) {
     const {password} = newData

     const passwordEncrypted = await bcrypt.hash(password)

     return Users.findByIdAndUpdate(id, {...newData, password:  passwordEncrypted }, { new: true })

 }

function getById (id){
    return Users.findById(id)
}
module.exports = {
    getAll,
    deleteById,
    updateById,
    getById,
    create
}