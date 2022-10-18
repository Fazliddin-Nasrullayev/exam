const { fetchdata }  = require('../../utils/db')

const createSubCategoryQuery  = `
    insert into subcategory( subcategory_name, sc_id) values($1, $2) returning *
`

const AddSubCategory =  (subcategory_name, subcategory_id) => fetchdata(createSubCategoryQuery, subcategory_name, subcategory_id)

const DeleteSubCategoryQuery = `
    delete from subcategory where subcategory_id = $1 returning *;
` 

const DeleteSubCategory = (id) => fetchdata(DeleteSubCategoryQuery, id)


const UpdateSubCategoryQuery = `
    update subcategory set subcategory_name = $1 where subcategory_id = $2 returning *
`
const UpdateSubCategory = (subcategory_name,id) => fetchdata(UpdateSubCategoryQuery,subcategory_name, id)

const GetSubCategoryQuery = `
    select * from subcategory 
`

const GetSubCategory = () => fetchdata(GetSubCategoryQuery)

module.exports = {
    AddSubCategory,
    DeleteSubCategory,
    UpdateSubCategory,
    GetSubCategory
}