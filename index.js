let home = 0;
let guest = 0;

let homeScore = document.getElementById("hmScore");
let guestScore = document.getElementById("gstScore");



function plus1(team){
    if (team == "home") {
        home += 1
        homeScore.textContent = home
    }else{
        guest += 1
        guestScore.textContent = guest
    }
}

function plus2(team){
    if (team == "home") {
        home += 2
        homeScore.textContent = home
    }else{
        guest += 2
        guestScore.textContent = guest
    }
}

function plus3(team){
    if (team == "home") {
        home += 3
        homeScore.textContent = home
    }else{
        guest += 3
        guestScore.textContent = guest
    }
}


function newGame(){
    home = 0
    guest = 0
    homeScore.textContent = home
    guestScore.textContent = guest
}















