const { AddSubCategory, DeleteSubCategory, UpdateSubCategory, GetSubCategory } = require('./model')

 const  SUBCATEGORY_POST = async( req, res) => {
        const { subcategory_name, id } = req.body
        if(!id || !subcategory_name) res.send(" subcategory name not found")

        const add_subcategory = await AddSubCategory(subcategory_name, id)
        res.send(add_subcategory)
    }

 const SUBCATEGORY_DELETE = async( req, res) => {
    const { id } = req.params
    if(!id) res.send("id not found")
    const delete_subcategory = await DeleteSubCategory(id)
    res.send(delete_subcategory) 

 }

 const SUBCATEGORY_PUT = async( req, res) => {
    const { id } = req.params
    if(!id) res.send("id not found")
    const { subcategory_name } = req.body
    if(!subcategory_name) res.send('subcategory name is required')
    const subcategory_update = await UpdateSubCategory(subcategory_name, id)
    res.send(subcategory_update)
 }

 const GET = async(req, res) => {
    const get = await GetSubCategory()
    res.send(get)
 }

module.exports = {
    SUBCATEGORY_POST,
    SUBCATEGORY_DELETE,
    SUBCATEGORY_PUT,
    GET
}