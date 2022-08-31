let scoreHome= document.getElementById("score-home")
let scoreGuest= document.getElementById("score-guest")
let scoreH= 0
let scoreG= 0
scoreHome.textContent= scoreH
scoreGuest.textContent= scoreG
let restart= document.getElementById("restart")

function home1(){
    scoreH= scoreH + 1
    scoreHome.textContent= scoreH
}

function home2(){
    scoreH= scoreH + 2
    scoreHome.textContent= scoreH
}

function home3(){
    scoreH= scoreH + 3
    scoreHome.textContent= scoreH
}

function guest1(){
    scoreG= scoreG + 1
    scoreGuest.textContent= scoreG
}

function guest2(){
    scoreG= scoreG + 2
    scoreGuest.textContent= scoreG
}

function guest3(){
    scoreG= scoreG + 3
    scoreGuest.textContent= scoreG
}

function newGame(){
    scoreHome.textContent= 0
    scoreGuest.textContent= 0
}
