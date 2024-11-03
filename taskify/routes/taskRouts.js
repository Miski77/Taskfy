const taskRoutes = (req, res) =>{
if(req.method === 'GET'){
    getTasks(req, res);
    
}else if(req.method === 'POST'){
    createTesk(req, res)
}else if(req.method === 'PATCH'){
    updateTesk(req, res)

}else if(req.method === 'DELETE'){
    deleteTesk(req, res)
}else{
    res.writeHead(404, 'data not found', {'content-type': 'application/json'})
    res.end(JSON.stringify({
        message: "Unknow Method required.",

    }))
}
}
module.exports = taskRoutes;