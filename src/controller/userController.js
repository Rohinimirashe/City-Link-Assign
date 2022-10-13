const userModel = require("../Model/userModel");


const createUsers = async function (req, res) {
    try{
    let data = req.body
    console.log(data.context)
    console.log(data.type)
    let showData=await userModel.create(data)
    console.log(showData)
    return res.status(200).send({status:true,Data:showData})
} catch (err) {
    return res.status(500).send({ status: false, error: err.message })
}
}

module.exports = { createUsers }