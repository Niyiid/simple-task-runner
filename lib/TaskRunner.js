/**
 * Created by osemeodigie on 30/05/2017.
 */


// Default throttle_limit is 2...
function TaskRunner(throttle_limit){

    this.max_task_limit = (throttle_limit == undefined) ? 2 : throttle_limit;
    this._currently_running_task = 0;
    this._tasks = []; // will hold the task object
    this._is_task_running = false;
    // var EventEmitter = require("events")
//  this.eventEmitter = new EventEmitter()

    // this.eventEmitter.on('done', this.completedTask)

};


TaskRunner.prototype.runNextTask = function(){

    // check if there are any other pending task
    // if found, pull the total number of offset task
    // start them...

    if(this._tasks.length == 0){
        return false;
    }

    // can only run a maximum of two tasks at the same time
    if(this._currently_running_task >= this.max_task_limit){

        return false;
    }

    this.current_task = null;

    this.current_task = this._tasks.shift();
    this._currently_running_task += 1; // taken a task to run
    console.log("\nScheduling another task to run...")
    this._is_task_running = true;
    this.current_task(this, this.doneTask); // completed task here..
};


TaskRunner.prototype.doneTask = function($this, time){

    // decrement my current task counter...
    $this._currently_running_task -= 1;
    $this._is_task_running = false;
    // call the runNextTask()
    if($this._tasks.length > 0){
        $this._is_task_running = true;
        $this.runNextTask();
    }

    if($this._is_task_running && $this._tasks.length == 0){
        console.log("Finished scheduling all task to run...")
    }

    if(!$this._is_task_running && $this._currently_running_task == 0){
        console.log("Finished running all tasks!")
    }
};


TaskRunner.prototype.addTask = function(task){

    this._tasks.push(task);
    if(this._tasks.length > 0){
        this.runNextTask();
    }
};

module.exports = TaskRunner;