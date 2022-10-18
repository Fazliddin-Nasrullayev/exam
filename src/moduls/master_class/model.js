const { fetchdata } = require('../../utils/db')

const createMasterClassQuery  = `
    insert into  master_class(dictator, job, phone, time, date, event, description,
        link, subcategory_id,image)
     values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *
`

const AddMasterClass =  (dictator, job, phone, time, date, event, description,link, subcategory_id,image) =>
 fetchdata(createMasterClassQuery,dictator, job, phone, time, date, event, description, link, subcategory_id,image)


 const updateMasterClassQuery = `
        update master_class set status = $1 where id = $2 returning *
 `

 const UpdateMasterClass = (status, id) => fetchdata(updateMasterClassQuery,status, id)

 const GetMasterClassQuery = ` 
        select * from master_class
 `

 const GetMasterClass = () => fetchdata(GetMasterClassQuery)
module.exports = {
    AddMasterClass, UpdateMasterClass, GetMasterClass
}