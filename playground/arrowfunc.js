const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        const taskstodo=this.tasks.filter((tasks)=> {
            return tasks.completed===false
        })
        return taskstodo
    }}



console.log(tasks.getTasksToDo())