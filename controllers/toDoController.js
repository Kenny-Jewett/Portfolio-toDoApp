import { ToDo } from "../models/toDoModel.js"


export const getTest = (req, res) => {
    res.status(201).send("Api is working: Hello")
}

export const getToDos = (req, res) => {
    ToDo.findAll()
    .then((todos) => {
        res.status(200).send(todos)
    })
    .catch(err => console.log(err))
}

export const getToDoById = (req, res) => {
    const id = parseInt(req.params.id)
    ToDo.findByPk(id)
    .then((todo) => {
        res.status(200).send(todo || "ToDo not found")
    })
    .catch(err => console.log(err))
}

export const deleteToDoById = (req, res) => {
    const id = parseInt(req.params.id)
    ToDo.destroy({
        where: {
            id: id
        }
    })
    .then(() => {
        res.status(204).send({
            message: `ToDo at ${id} was deleted.`
            // 204 doesn't send a message
        })
    })
    .catch(err => console.log(err))
}

export const addToDo = (req, res) => {
    ToDo.create({
        title: req.body.title,
        priority: req.body.priority
    })
    .then(() => {
        res.status(201).send({
            message: "Created ToDo"
        })
    })
    .catch(err => console.log(err))
}

export const updateToDoById = (req, res) => {
    const id = parseInt(req.params.id)
    ToDo.update({
        title: req.body.title,
        priority: req.body.priority},        
        {where: {id: id}
    })
    .then(() => {
        res.status(200).send({
            message: "ToDo updated."
        })
    })
    .catch(err => console.log(err))
}