const fs = require('fs');

let listToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, err => {
        if (err) {
            throw new Error('Error saving data on file data.json', err)
        }
        console.log('File Saved!');
    })
};

const getDB = () => {
    try {
        listToDo = require('./../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

const list = () => {
    getDB()
    return listToDo;
}

const update = (description, status = true) => {
    getDB()
    let index = listToDo.findIndex(task => task.description === description);
    if (index != -1) {
        listToDo[index].status = status;
    } else {
        console.log(`Task ${description} is not defined`);
    }
    saveDB();
}

const create = (description) => {

    getDB();

    let toDo = {
        description,
        status: false,
    }
    listToDo.push(toDo);

    saveDB();
    return toDo;
}
const deleteTask = (description) => {
    getDB()
        // let index = listToDo.findIndex(task => task.description === description);
        // if (index != -1) {
        //     listToDo.pop(listToDo[index]);
        //     saveDB();
        //     return true;
        // } else {
        //     console.log(`Task ${description} is not defined`);
        //     return false;
        // }

    let newlistToDo = listToDo.filter(task => task.description !== description);
    if (newlistToDo.length === listToDo.length) {
        return false
    } else {
        listToDo = newlistToDo;
        saveDB()
        return true
    }
}
module.exports = {
    create,
    list,
    update,
    deleteTask,
}