const EmpModel = require('../models/EmployeeModel');
var url = "mongodb://localhost:27017/Employee";
var MongoClient = require('mongodb').MongoClient;


exports.insertEmp = function (req, res) {
	var doc = req.body;
	MongoClient.connect(url, function(err, db) {
	db.collection(doc).insert(doc, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        db.close();
    });
	}
    res.send('Employee details registered sucessfully');
};
exports.updateEmp = function (req, res) {
	var doc = req.body.id;
	MongoClient.connect(url, function(err, db) {
	db.collection(doc).findOneAndUpdate(doc, function(err, res) {
        if (err) throw err;
        console.log("Document updated success");
        db.close();
    });
	}
    res.send('Employee details updated sucessfully');
};
exports.deleteEmp = function (req, res) {
	var doc = req.body.id;
	MongoClient.connect(url, function(err, db) {
	db.collection(doc).findOneAndDelete(doc, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        db.close();
    });
	}
    res.send('Employee detail deleted sucessfully');
};