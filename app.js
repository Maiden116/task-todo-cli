const { argv } = require('./config/yargs');
const colors = require('colors');
const { create, list, update, deleteTask } = require('./to-do/to-do');


let comando = argv._[0];

switch (comando) {
    case 'list':
        {
            for (let task of list()) {
                console.log(`==============Task to do==================`.green);
                console.log(`==============Description:${task.description}==================`.blue);
                console.log(`==============Status: ${task.completed}==================`.blue);
                console.log(`==========================================`.red);
            }
            break;
        }
    case 'create':
        {
            console.log(`Create a Task to do`);
            console.log(`Task created`, create(argv.description));
            break;
        }
    case 'update':
        {
            update(argv.description, argv.booleanstatus)
            break;
        }
    case 'delete':
        {
            if (deleteTask(argv.description)) {
                console.log(`Task ${argv.description} deleted`);
            } else {
                console.log(`Couldnt delete Task ${argv.description}`);
            }
            break;
        }
    default:
        {
            console.log(`Task not reconized`);
        }
}