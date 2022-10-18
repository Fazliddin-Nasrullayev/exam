const { fetchdata }  = require('../../utils/db')

const createCategoryQuery  = `
    insert into category(category_name) values($1) returning *
`

const AddCategory =  (category_name) => fetchdata(createCategoryQuery,category_name)

const updateCategoryQuery = `
    update category set category_name = $1 where category_id = $2 returning *
`

const UpdateCategory = (category_name, id) => fetchdata(updateCategoryQuery,category_name, id)

const DeleteCategoryQuery = `
    delete  from category where category_id = $1 returning *
`

const DeleteCategory = (id) => fetchdata(DeleteCategoryQuery,id)

const GetQuery = `
    select * from category
`

const GetCategory = () => fetchdata(GetQuery)

module.exports = {
    AddCategory,
    UpdateCategory,
    DeleteCategory,
    GetCategory
}