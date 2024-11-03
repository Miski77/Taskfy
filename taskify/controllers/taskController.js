const IncomingForm = require("formidable/Formidable");
const {readTasksFromFile} = require("../utils/fileHandler")


exports.getTasks = (req, res)=>{
    const tasks = readTasksFromFile();
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify(tasks))

}

exports.createTasks = (req, rest) =>{
    const from = new IncomingForm();
    from.parse(req , (err, fields, files)=>{
        if(err){
            res.writeHead(400, {'content-type': 'application/json'});
            res.end(JSON.stringify({message: 'error parsing from'

            }))
            return;

        }
        const tasks = readTasksFromFile()
        const newTasks = {
            id: Date.now(),
            title: fields.title,
            description: fields.description,
            status: fields?.status || 'pending',
            Image: files.image ? `/uploads/${files.image.name}` : null ,    
        }
        tasks.push(newTasks);
        writeTaskaToFile(tasks);
        if(files.image){
            copyFileSync(files.image.path, path.join(__dirname,'../uploads' , files.image.name))
            res.end(JSON.stringify(newTasks))
        }
        exports.updateTesk = (res, req) => {
            res.end(JSON.stringify({
                message: 'no yet implemented'

            }))
        }
        exports.deleteTesk = (res, req)=>{
            res.end(JSON.stringify({
                message: 'noyet implemented'
            }

            ))
        }

    })
}