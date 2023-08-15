import state from "./state.js";
import * as events from "./event.js"
import * as timer from "./timer.js"

export function start (minutes, seconds){

    minutes = minutes
    seconds = seconds
    
    events.registerControls()
    events.registerModes()

    timer.upDateDisplay()

}