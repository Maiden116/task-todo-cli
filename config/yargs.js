const description = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Task Name',
    }
}

const status = {
    status: {
        demand: true,
        alias: 's',
        default: true,
        desc: 'Task Status',
    }
}

const argv = require('yargs')
    .command('create', 'Save a task to do', {
        description
    })
    .command('update', 'Update task passed throw parameter', {
        description,
        status,
    })
    .command('delete', 'Delete saved Task', {
        description,
    })
    .command('list', 'List task saved')
    .help()
    .argv

module.exports = {
    argv
}