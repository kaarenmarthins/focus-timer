import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning(){

    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()

}

export function reset (){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.upDateDisplay()

}

export function stop(){
    reset()
}  

export function plus(){

    if (minutes.textContent >= "95") {
        minutes.textContent = "95"
    } else {
        el.minutes.textContent = Number(el.minutes.textContent) + 5
        minutes.innerHTML = String(el.minutes.textContent).padStart(2, "0")
    }
}
    

export function less(){
    if (minutes.textContent <= "00") {
        return
    } else {
        el.minutes.textContent = Number(el.minutes.textContent) - 5
        minutes.innerHTML = String(el.minutes.textContent).padStart(2, "0")
    }
}

//mode functions music

function musicTree(){

    state.isMute = document.querySelector(".tree").classList.toggle('music-on')

    if (state.isMute){
        sounds.btnTree.play()
        return
    }

    sounds.btnTree.pause()
}

function musicRain(){

    state.isMute = document.querySelector(".tree").classList.toggle('music-on')

    if (state.isMute){
        sounds.btnRain.play()
        return
    }

    sounds.btnRain.pause()
}

function musicCoffee(){

    state.isMute = document.querySelector(".tree").classList.toggle('music-on')

    if (state.isMute){
        sounds.btnCoffee.play()
        return
    }

    sounds.btnCoffee.pause()
}

function musicFire(){

    state.isMute = document.querySelector(".tree").classList.toggle('music-on')

    if (state.isMute){
        sounds.btnFire.play()
        return
    }

    sounds.btnFire.pause()
}

//mode functions color

export function tree(){

    //const tree = new Audio("https://github.com/gabrielSantos1101/Focus-timer-2.0/blob/master/assets/sounds/coffeeShop.mp3")

    state.active = document.querySelector(".tree").classList.toggle('active')
    state.active = document.querySelector(".rain").classList.remove('active')
    state.active = document.querySelector(".coffee").classList.remove('active')
    state.active = document.querySelector(".fire").classList.remove('active')

    musicTree()
    
    // tree.play()
    //tree.play()
}

export function rain(){
    state.active = document.querySelector(".tree").classList.remove('active')
    state.active = document.querySelector(".rain").classList.toggle('active')
    state.active = document.querySelector(".coffee").classList.remove('active')
    state.active = document.querySelector(".fire").classList.remove('active')

    musicRain()

}

export function coffee(){
    state.active = document.querySelector(".tree").classList.remove('active')
    state.active = document.querySelector(".rain").classList.remove('active')
    state.active = document.querySelector(".coffee").classList.toggle('active')
    state.active = document.querySelector(".fire").classList.remove('active')

    musicCoffee()
}

export function fire(){
    state.active = document.querySelector(".tree").classList.remove('active')
    state.active = document.querySelector(".rain").classList.remove('active')
    state.active = document.querySelector(".coffee").classList.remove('active')
    state.active = document.querySelector(".fire").classList.toggle('active')

    musicFire()

}


