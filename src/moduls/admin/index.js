const { CheckAdmin } = require('./model')
const { sign } = require('../../utils/jwt')

const CHECK_ADMIN = async (req, res)=>{
    const { admin_name, admin_password } =  req.body
    if(!admin_name || !admin_password) res.send( 'wrong admin name or password' )


    const [check_admin] = await CheckAdmin(admin_name, admin_password)
    if(!check_admin){
      return res.status(404).json("wrong admin")
    }
    res.cookie("token", sign({ id: check_admin.admin_id }), {
      maxAge: 2000 * 1000,
    })

    res.redirect('/api/admin')
}

const GET = async (req, res) => {
    res.send("welcome admin")
}


module.exports =  {
    CHECK_ADMIN,
    GET
}