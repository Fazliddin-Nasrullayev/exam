const { AddCategory, UpdateCategory, DeleteCategory, GetCategory } = require('./model')

 const  CATEGORY_POST = async( req, res) => {
        const { category_name } = req.body
        if(!category_name) res.send(" category name not found")

        const add_category = await AddCategory(category_name)
        res.send(add_category)
    }

 const CATEGORY_PUT = async( req, res) => {
    const { id } = req.params
    if(!id) res.send(" id not found")
    const { category_name } = req.body
    if(!category_name) res.send(" category name not found")

    const update_category = await UpdateCategory(category_name, id)
    res.send(update_category)
 }

 const CATEGORY_DELETE = async( req, res) => {
    const { id } = req.params
    if(!id) res.send(" id not found")
    const delete_category = await DeleteCategory(id)
    res.send(delete_category)
 }

 const GET = async( req, res) => {
    const get = await GetCategory()
    res.send(get)
 }

module.exports = {
    CATEGORY_POST,
    CATEGORY_PUT,
    CATEGORY_DELETE,
    GET
}