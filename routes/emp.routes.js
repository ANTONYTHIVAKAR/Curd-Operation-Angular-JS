const express = require('express');
const router = express.Router();

const emp_controller = require('../controllers/emp.controller');

router.post('/postEmp', emp_controller.insertEmp);
router.put('/putEmp', emp_controller.updateEmp);
router.put('/putEmp/delete', emp_controller.deleteEmp);
router.get('/getEmp', emp_controller.getEmp);
module.exports = router;
