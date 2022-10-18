const {Router} = require('express')

const admin = require('../moduls/admin')
const category = require('../moduls/category')
const subcategory = require('../moduls/subcategory')
const master_class = require('../moduls/master_class')
const verifyToken = require('../middlwares/verify')

const router = Router()

router.get('/admin',verifyToken, admin.GET)
router.get('/category', category.GET)
router.get('/subcategory', subcategory.GET)
router.get('/elon', master_class.GET)

router.post('/login', admin.CHECK_ADMIN)
router.post('/category', category.CATEGORY_POST)
router.post('/subcategory', subcategory.SUBCATEGORY_POST)
router.post('/elon', master_class.MASTERCLASS_POST)


router.put('/category/:id', category.CATEGORY_PUT)
router.put('/elon/:id', master_class.MASTERCLASS_PUT)
router.put('/subcategory/:id', subcategory.SUBCATEGORY_PUT)


router.delete('/category/:id', category.CATEGORY_DELETE)
router.delete('/subcategory/:id', subcategory.SUBCATEGORY_DELETE)

module.exports = router