'use strict'
async function game() {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();

    rotate.spin()
    score.UpdateScore()
    inputMove()

    let gameinfo = document.getElementById('pill-grid')
    gameinfo.data.throw = true
    while (gameinfo.data.win != true && gameinfo.data.lose != true) {
        await tickrate.timer.sleep(1000 / gameinfo.data.animationSpeed)
        if (gameinfo.data.throw) {

            await pillThrow.handAnim()
        } else if (gameinfo.data.gravity) {
            await gravity.fallingPill()
        }

        /*
                var gravity = async () => {
                    const result = await pillThrow.pillAnim()
                    console.log("gravity time!")
                }
        */

        if (gameinfo.data.RedLiving == -1 && gameinfo.data.BlueLiving == -1 && gameinfo.data.YellowLiving == -1) {

            let gameinfo = document.getElementById('pill-grid')
            gameinfo.data.win = true
            console.log('wygranko')
            let gamecontainer = document.getElementById('game-container')
            let winImg = document.createElement('img')
            winImg.id = 'winscreen'
            winImg.src = 'assets/sc.png'
            gamecontainer.appendChild(winImg)
        }
    }
}
