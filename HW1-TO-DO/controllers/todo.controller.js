const mongoose = require("mongoose");
const todo = require("../models/todo.model.js");


function create(req, res) {
    const create = new todo(req.body)
    create.save()
        .then(() => {
            return res.status(201).json(create)
        })
        .catch((err) => {
            return res.json({
                message: "Kayıt Oluşturulurken Hata Oluştu : " + err
            })
        })
}


function findAll(_, res) {

    todo.find()
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            return res.json({
                message: "Kayıt Bulunurken Hata Oluştu : " + err
            })
        })
};

function findOne(req, res) {
    todo.findById(req.params.id)
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            return res.json({
                message: "İD'ye Göre Kayıt Bulunurken Hata Oluştu : " + err
            })
        });
};

function update(req, res) {

    todo.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            date: req.body.date,
        })
        .then((_, newTodo) => {
            res.json(newTodo);
        })
        .catch((err) => {
            return res.json({
                message: "VT'de Kayıt Güncellenirken Hata Oluştu : " + err
            })
        })
};

function remove(req, res) {
    todo.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json({
                message: "VT'den Kayıt Başarıyla Silindi"
            })

        })

    .catch((err) => {
        return res.json({
            message: "VT'den Kayıt Silinirken Hata Oluştu : " + err
        })
    });

};
module.exports = {
    create,
    findAll,
    findOne,
    update,
    remove

};