const { fetchdata } =  require("../../utils/db");

const CheckAdminQuery = `select * from admin where admin_name = $1 and admin_password = $2`;


const CheckAdmin = (admin_name, admin_password) => fetchdata(CheckAdminQuery, admin_name, admin_password) 

 

module.exports = {
    CheckAdmin
}

 