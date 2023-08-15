
// always events of click in the project

import { controls } from "./elements.js";
import { modes } from "./elements.js";
import * as actions from "./action.js"


export function registerControls(){

    controls.addEventListener('click', (event) => {
        
        // console.log(event.target) - I see how the button was active when I clock

        const action = event.target.dataset.action
        if(typeof actions[action] != "function"){
            return
        }

        actions[action]()
      
    })
}

export function registerModes(){
    modes.addEventListener('click', (event) => {

        const action = event.target.dataset.action
        if( typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })

}

