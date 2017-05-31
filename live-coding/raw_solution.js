// Implement an Asynchronous task runner that runs tasks concurrently up until a certain limit.

// Start: 3:50PM WAT
// End: 4:50PM WAT


function TaskRunner(){

    this.max_task_limit = 2;
    this.currently_running_task = 0;
    this.tasks = []; // will hold the task object
    this.is_task_running = false;
    // var EventEmitter = require("events")
//  this.eventEmitter = new EventEmitter()

    // this.eventEmitter.on('done', this.completedTask)

}


TaskRunner.prototype.runNextTask = function(){

    // check if there are any other pending task
    // if found, pull the total number of offset task
    // start them...

    if(this.tasks.length === 0){
        return false;
    }

    // can only run a maximum of two tasks at the same time
    if(this.currently_running_task >= this.max_task_limit){

        return false;
    }

    this.current_task = null;

    this.current_task = this.tasks.shift();
    this.currently_running_task += 1; // taken a task to run
    console.log("Scheduling another task to run...");
    this.is_task_running = true;
    this.current_task(this, this.doneTask); // completed task here..
};


TaskRunner.prototype.doneTask = function($this, time){

    // decrement my current task counter...
    $this.currently_running_task -= 1;
    $this.is_task_running = false;
    // call the runNextTask()
    if($this.tasks.length > 0){
        $this.is_task_running = true;
        $this.runNextTask();
    }

    if($this.is_task_running && $this.tasks.length === 0){
        console.log("Finished scheduling all task to run...");
    }

    if(!$this.is_task_running && $this.currently_running_task === 0){
        console.log("Finished running all tasks!");
    }
};


TaskRunner.prototype.addTask = function(task){

    this.tasks.push(task);
    if(this.tasks.length > 0){
        this.runNextTask();
    }
};









// Example Task
function task($this, done_callback) {
    var time = Math.random() * 8000;
    setTimeout(function() {
        console.log('task complete', time);
        done_callback($this, time);
    }, time);
    console.log('task started', time);
}


var taskRunner = new TaskRunner();

//new task(taskRunner.eventEmitter)
taskRunner.addTask(task);
taskRunner.addTask(task);
taskRunner.addTask(task);
taskRunner.addTask(task);
taskRunner.addTask(task);
taskRunner.addTask(task);
taskRunner.addTask(task);
taskRunner.addTask(task);
taskRunner.addTask(task);
taskRunner.addTask(task);


// task started 123.23232
// task started 593.23232
// task started 3.23232 <-- delay before start