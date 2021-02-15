'use strict'
/* 
ArrowUp      = 38
ArrowLeft    = 37
ArrowDown    = 40
ArrowRight   = 39
KeyW         = 87
KeyA         = 65
KeyS         = 83
KeyD         = 68
Shift        = 16
KeyQ         = 81

            rotate: false,
            left: false,
            right: false,
            speedUp: false,
*/

document.body.onkeydown = async (e) => {
    let gameinfo = document.getElementById('pill-grid')

    try {
        //rotation = FUNCS.pill.get_rotation(pill[0])
    } catch {
        return
    }

    if (gameinfo.data.falling) {
        switch (e.keyCode) {
            case 38:
            case 87:
                gameinfo.data.rotate = true
                break

            case 37:
            case 65:
                gameinfo.data.left = true

                break

            case 40:
            case 83:
                gameinfo.data.speedUp = true
                break

            case 39:
            case 68:
                gameinfo.data.right = true
                break

            default:
                break
        }
    }
}


document.body.onkeyup = async (e) => {
    switch (e.keyCode) {
        case 38:
        case 87:
            gameinfo.data.rotate = false
            console.log(87 + "stop")
            break

        case 37:
        case 65:
            gameinfo.data.left = false
            console.log(65 + "stop")

            break

        case 40:
        case 83:
            gameinfo.data.speedUpMultiplier = 1
            gameinfo.data.speedUp = false
            console.log(83 + "stop")
            break

        case 39:
        case 68:
            gameinfo.data.right = false
            console.log(68 + "stop")
            break

        default:
            break
    }
}


async function inputMove() {
    while (gameinfo.data.win != true && gameinfo.data.lose != true) {
        if (gameinfo.data.falling) {
            if (gameinfo.data.rotate) {
                if (gameinfo.data.fallPillPos == 'h') {
                    gameinfo.data.fallPillPos = 'v'

                } else if (gameinfo.data.fallPillPos == 'v') {
                    gameinfo.data.fallPillPos = 'h'
                    let colorswap = gameinfo.data.pillToFall.charAt(1) + gameinfo.data.pillToFall.charAt(0)
                    console.log(gameinfo.data.pillToFall)
                    gameinfo.data.pillToFall = colorswap
                    console.log(gameinfo.data.pillToFall)

                }
                console.log('rotate')
            }
            if (gameinfo.data.left) {
                try {
                    if (gameinfo.data.fallPillPos == 'h') {
                        let leftObjecttest = document.getElementById(gameinfo.data.coordsY1 + '_' + (gameinfo.data.coordsX1 - 1)).data.state == 'empty'
                        //console.log(leftObjecttest)
                        let leftWalltest = (gameinfo.data.coordsY1 > -1) && (gameinfo.data.coordsX1 > 0 && gameinfo.data.coordsX2 > 0)
                        let leftBottleneckCheck = (gameinfo.data.coordsY1 <= -1) && (gameinfo.data.coordsX1 > 4 && gameinfo.data.coordsX2 > 4)

                        if ((leftWalltest || leftBottleneckCheck) && leftObjecttest) {
                            gravity.removePill(gameinfo.data.coordsY1, gameinfo.data.coordsX1, gameinfo.data.coordsY2, gameinfo.data.coordsX2)
                            gameinfo.data.coordsX1--
                            gameinfo.data.coordsX2--
                            gravity.assignPill(gameinfo.data.coordsY1, gameinfo.data.coordsX1, gameinfo.data.coordsY2, gameinfo.data.coordsX2, gameinfo.data.pillToFall)
                            console.log('left')
                        }




                    }
                } catch { }
            }
            if (gameinfo.data.right) {
                try {
                    if (gameinfo.data.fallPillPos == 'h') {
                        let rightObjecttest = document.getElementById(gameinfo.data.coordsY2 + '_' + (gameinfo.data.coordsX2 + 1)).data.state == 'empty'
                        console.log(rightObjecttest)
                        let rightWalltest = (gameinfo.data.coordsY1 > -1) && (gameinfo.data.coordsX1 < 7 && gameinfo.data.coordsX2 < 7)
                        let rightBottleneckCheck = (gameinfo.data.coordsY1 <= -1) && (gameinfo.data.coordsX1 < 4 && gameinfo.data.coordsX2 < 4)
                        if ((rightWalltest || rightBottleneckCheck) && rightObjecttest) {
                            gravity.removePill(gameinfo.data.coordsY1, gameinfo.data.coordsX1, gameinfo.data.coordsY2, gameinfo.data.coordsX2)
                            gameinfo.data.coordsX1++
                            gameinfo.data.coordsX2++
                            gravity.assignPill(gameinfo.data.coordsY1, gameinfo.data.coordsX1, gameinfo.data.coordsY2, gameinfo.data.coordsX2, gameinfo.data.pillToFall)
                            console.log('right')
                        }



                    }
                } catch { }
            }
            if (gameinfo.data.speedUp) {
                gameinfo.data.speedUpMultiplier = 5
                console.log('speedUp')
            }
        }
        await tickrate.timer.sleep(2500 / gameinfo.data.animationSpeed)
    }
}

/*
        gameinfo.data.coordsX1 = 3
        gameinfo.data.coordsY1 = -2
        gameinfo.data.coordsX2 = 4
        gameinfo.data.coordsY2 = -2
*/