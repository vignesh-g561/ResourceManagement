var express = require('express');
var router = express.Router();
var Employees = require('../out.json');
var app = express();
router.route('/all')
        .get(function(req,res){
          console.log("Inside All");
          res.json(Employees);
});
router.route('/:EmpId')
      .get(function(req,res){
        var id = req.params.EmpId;
        var employee;
        for(var i=0;i<Employees.length;i++){
          if(Employees[i]['Emp No'] == id){
            console.log(Employees[i]['Emp No']);
            //console.log(id);
            employee = Employees[i];
            break;
          }
          employee="Search not found";
        }
        res.json(employee);
      });

module.exports=router;
