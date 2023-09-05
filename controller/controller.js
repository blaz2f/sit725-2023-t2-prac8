let collection = require('../model/cat.js')
var bson = require('bson');

function insertCat(req, res) {
    let cat = req.body;
    collection.insertCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
}

function deleteCat(req, res) {
    var ids_list = JSON.parse(req.body.$in)
    var obj_ids_list = ids_list.map(function(id) { return bson.ObjectId(id); });
    let cat = { '_id': { '$in':  obj_ids_list} };
    collection.deleteCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 202, data: result, message: 'success' });
        }
    });
}

function getAllCats(req, res) {
    collection.getAllCats((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'success' });
        }

    });
}

module.exports = { insertCat, deleteCat, getAllCats }

