/**
 * Created by osemeodigie on 30/05/2017.
 */

// Example Task
function Task($this, done_callback) {
    var time = Math.random() * 8000
    setTimeout(function() {
        console.log('task complete', time)
        done_callback($this, time)
    }, time);
    console.log('task started', time)
}

module.exports = Task;