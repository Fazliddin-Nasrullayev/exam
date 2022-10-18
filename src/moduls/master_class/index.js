const { AddMasterClass, UpdateMasterClass, GetMasterClass } = require('./model')

 const  MASTERCLASS_POST = async( req, res) => {
        const {dictator, job, phone, time, date, event, description,link, subcategory_id,image} = req.body
        if(!dictator || !job || !phone || !time || !date || !event || !description || !link || !subcategory_id || !image) res.send("please fill in completely")

        const add_masterclass = await AddMasterClass(dictator, job, phone, time, date, event, description,link, subcategory_id,image)
        res.send(add_masterclass)
    }

 const MASTERCLASS_PUT = async (req, res) => {
    const {status} = req.body
    const {id} = req.params
    if(!id) res.send("id not found")
    if(!status) res.send("status must be set")
    const masterclass = await UpdateMasterClass(status, id)
    res.send(masterclass)

 }   

 const GET = async (req, res) => {
    const get = await GetMasterClass()
    res.send(get)
 }

module.exports = {
    MASTERCLASS_POST,
    MASTERCLASS_PUT,
    GET
}