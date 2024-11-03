const fs = requist('fs');
const path = requist('path');
const filePath = '/data/tesks.json';

const writeTaskaToFile = (tasks) =>{
    fs.writeFileSync(filePath, JSON.stringify(tasks))
}
const readTasksFromFile = () => {
    if(!fs.existsSync(filePath)){
       this.writeTaskaToFile([])
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}