"use strict";
function game() {

    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();


    let i;
    let l;
    var pillgrid = document.getElementById("pill-grid")

    for (i = 0; i < 16; i++) {
        for (l = 0; l < 8; l++) {
            let childtile = document.createElement("div");
            childtile.id = (i + "-" + l)
            childtile.className = "tile"
            childtile.style.left = l * 24 + "px"
            childtile.style.top = i * 24 + "px"
            childtile.gameinfo = "empty" //empty,virusY,virusB,virusR,dotY,dotB,dotR,oY,oB,oR,xY,xB,xR,botY,botB,botR,leftY,leftB,leftR,rightY,rightB,rightR,topY,topB,topR,
            pillgrid.appendChild(childtile)
        }
    }



    document.getElementById("game-container").score = "0000000"
    document.getElementById("game-container").level = "01"
    document.getElementById("game-container").speed = "LOW"
    document.getElementById("game-container").viruscount = "04"
    document.getElementById("game-container").notFinished = true
    document.getElementById("game-container").win = false
    document.getElementById("game-container").lose = false
    document.getElementById("game-container").throwReady = true
    document.getElementById("game-container").fallingspeed = 1000
    document.getElementById("level-counter").innerHTML = document.getElementById("game-container").level = "01"
    document.getElementById("speed-counter").innerHTML = document.getElementById("game-container").speed = "LOW"

    document.getElementById("top-counter").innerHTML = "0000000"
    document.getElementById("score-counter").innerHTML = document.getElementById("game-container").score
    document.getElementById("virus-counter").innerHTML = document.getElementById("game-container").viruscount = "04"


    function tickrate() {
        return new Promise(resolve => setTimeout(resolve, 500));
    }
    async function WinLoseCheck() {
        while (true) {
            await new Promise(resolve => setTimeout(resolve, 500));
            if (document.getElementById("game-container").win || document.getElementById("game-container").lose) {
                document.querySelector("audio").pause();
            }

        }
    }








    //async function virusSpin() {
    //    while (document.getElementById("game-container").notFinished) {
    //        await new Promise(resolve => setTimeout(resolve, 1000));
    //    }
    //}
    spawn()
    controls()

    pillgravity()
    movePill()

    pillThrow()
    WinLoseCheck()
    //virusSpin()

}
