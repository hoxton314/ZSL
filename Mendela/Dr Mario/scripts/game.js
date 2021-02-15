'use strict'
async function game() {
    score.UpdateScore()
    inputMove()

    let gameinfo = document.getElementById('pill-grid')
    gameinfo.data.throw = true
    while (gameinfo.data.win != true && gameinfo.data.lose != true) {
        await tickrate.timer.sleep(1000 / gameinfo.data.animationSpeed)
        if (gameinfo.data.throw) {
            await pillThrow.handAnim()
        } else if (gameinfo.data.gravity) {
            await gravity.fallingPill(gameinfo.data.pillToFall)
        }

        /*
                var gravity = async () => {
                    const result = await pillThrow.pillAnim()
                    console.log("gravity time!")
                }
        */
    }
}
