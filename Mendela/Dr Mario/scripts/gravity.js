'use strict'
let gameinfo = document.getElementById('pill-grid')

var gravity = {
    fallingPill: async function () {
        gameinfo.data.gravity = false
        let pill1 = 'url("assets/bottle/left' + gameinfo.data.pillToFall.slice(0, -1) + '.png")'
        let pill2 = 'url("assets/bottle/right' + gameinfo.data.pillToFall.slice(1) + '.png")'
        gameinfo.data.coordsX1 = 3
        gameinfo.data.coordsY1 = -2
        gameinfo.data.coordsX2 = 4
        gameinfo.data.coordsY2 = -2
        let below1 = document.getElementById((gameinfo.data.coordsY1 + 1) + '_' + (gameinfo.data.coordsX1))
        let below2 = document.getElementById((gameinfo.data.coordsY2 + 1) + '_' + (gameinfo.data.coordsX2))


        gravity.assignPill(gameinfo.data.coordsY1, gameinfo.data.coordsX1, gameinfo.data.coordsY2, gameinfo.data.coordsX2, gameinfo.data.pillToFall)


        if (below1.data.state == 'empty' && below2.data.state == 'empty') {
            gameinfo.data.falling = true
        } else {
            gameinfo.data.falling = false
        }
        while (gameinfo.data.falling) {
            /*
            if (gameinfo.data.fallPillPos = 'h') {
                if (gameinfo.data.coordsY1 > 14 || gameinfo.data.coordsY2 > 14) {
                    var test1 = true
                    var test2 = true
                } else {
                    var test1 = gameinfo.data.fallPillPos == 'h' && (below1.data.state != 'empty' || below2.data.state != 'empty')
                    var test2 = gameinfo.data.fallPillPos == 'v' && below2.data.state != 'empty'
                }
                if (test1 || test2) {
                    gameinfo.data.falling = false
                    gameinfo.data.throw = true
                    return
                }
            }*/
            gameinfo.data.falling = !gravity.collider(0)
            gameinfo.data.throw = gravity.collider(0)

            if (!gravity.collider(1)) {

                gravity.removePill(gameinfo.data.coordsY1, gameinfo.data.coordsX1, gameinfo.data.coordsY2, gameinfo.data.coordsX2)
                gameinfo.data.coordsY1++
                gameinfo.data.coordsY2++

                gravity.assignPill(gameinfo.data.coordsY1, gameinfo.data.coordsX1, gameinfo.data.coordsY2, gameinfo.data.coordsX2, gameinfo.data.pillToFall)

                below1 = document.getElementById((gameinfo.data.coordsY1 + 1) + '_' + (gameinfo.data.coordsX1))
                below2 = document.getElementById((gameinfo.data.coordsY2 + 1) + '_' + (gameinfo.data.coordsX2))
            }
            if (gravity.collider(1)) {
                if ((gameinfo.data.coordsY1 == 0 || gameinfo.data.coordsY2 == 0) && (gameinfo.data.coordsX1 == 3 || gameinfo.data.coordsX2 == 4)) {
                    //alert("przegrana")
                    let gameinfo = document.getElementById('pill-grid')
                    gameinfo.data.lose = true
                    console.log('przegranko')
                    let gamecontainer = document.getElementById('game-container')
                    let loseImg = document.createElement('img')
                    loseImg.id = 'gameover'
                    loseImg.src = 'assets/go.png'
                    gamecontainer.appendChild(loseImg)

                    loseImg = document.createElement('img')
                    loseImg.id = 'gameover-mario'
                    loseImg.src = 'assets/go_dr.png'
                    gamecontainer.appendChild(loseImg)
                    rotate.spinLost()

                }
                gravity.match4(gameinfo.data.coordsY1, gameinfo.data.coordsX1, gameinfo.data.coordsY2, gameinfo.data.coordsX2, gameinfo.data.pillToFall)
            }
            await tickrate.timer.sleep((7500 / gameinfo.data.animationSpeed) / gameinfo.data.speedUpMultiplier)
        }
    },
    bottle: async function () {

    },
    assignPill: function (y1, x1, y2, x2, color) {

        if (y1 == y2) {
            document.getElementById(y1 + '_' + x1).style.backgroundImage = 'url("assets/bottle/left' + color.slice(0, -1) + '.png")'
            document.getElementById(y2 + '_' + x2).style.backgroundImage = 'url("assets/bottle/right' + color.slice(1) + '.png")'
            document.getElementById(y1 + '_' + x1).data.state = "pill" + color.slice(0, -1)
            document.getElementById(y2 + '_' + x2).data.state = "pill" + color.slice(1)
        }
        if (x1 == x2) {
            document.getElementById(y1 + '_' + x1).style.backgroundImage = 'url("assets/bottle/top' + color.slice(0, -1) + '.png")'
            document.getElementById(y2 + '_' + x2).style.backgroundImage = 'url("assets/bottle/bot' + color.slice(1) + '.png")'
            document.getElementById(y1 + '_' + x1).data.state = "pill" + color.slice(0, -1)
            document.getElementById(y2 + '_' + x2).data.state = "pill" + color.slice(1)
        }



    },
    removePill: function (y1, x1, y2, x2) {
        document.getElementById(y1 + '_' + x1).style.backgroundImage = ''
        document.getElementById(y2 + '_' + x2).style.backgroundImage = ''
        document.getElementById(y1 + '_' + x1).data.state = "empty"
        document.getElementById(y2 + '_' + x2).data.state = "empty"
    },
    collider: function (append) {
        if (append == 0) {
            try {
                let check1 = document.getElementById((gameinfo.data.coordsY1 + 2) + '_' + gameinfo.data.coordsX1).data.state == "empty" || document.getElementById((gameinfo.data.coordsY1 + 2) + '_' + gameinfo.data.coordsX1) == document.getElementById((gameinfo.data.coordsY2 + 1) + '_' + gameinfo.data.coordsX2)
                let check2 = document.getElementById((gameinfo.data.coordsY2 + 2) + '_' + gameinfo.data.coordsX2).data.state == "empty" || document.getElementById((gameinfo.data.coordsY2 + 2) + '_' + gameinfo.data.coordsX2) == document.getElementById((gameinfo.data.coordsY1 + 1) + '_' + gameinfo.data.coordsX1)
                return !(check1 && check2)
            } catch { }
            return true
        } else if (append == 1) {
            if (gameinfo.data.coordsY1 == gameinfo.data.coordsY2) {
                try {
                    let check2 = document.getElementById((gameinfo.data.coordsY2 + 1) + '_' + gameinfo.data.coordsX2).data.state == "empty" && document.getElementById((gameinfo.data.coordsY1 + 1) + '_' + gameinfo.data.coordsX1).data.state == "empty"
                    return !(check2)
                } catch { }
                return true
                //let check1 = document.getElementById((gameinfo.data.coordsY1 + 1) + '_' + gameinfo.data.coordsX1).data.state == "empty" || document.getElementById((gameinfo.data.coordsY1 + 1) + '_' + gameinfo.data.coordsX1) == document.getElementById((gameinfo.data.coordsY2 + 1) + '_' + gameinfo.data.coordsX2)

            } else if (gameinfo.data.coordsY1 != gameinfo.data.coordsY2) {
                //let check1 = document.getElementById((gameinfo.data.coordsY2 + 1) + '_' + gameinfo.data.coordsX2) == document.getElementById((gameinfo.data.coordsY1 + 1) + '_' + gameinfo.data.coordsX1)
                try {
                    let check2 = document.getElementById((gameinfo.data.coordsY2 + 1) + '_' + gameinfo.data.coordsX2).data.state == "empty"
                    return !(check2)
                } catch { }
                return true
            }

        }
        //gameinfo.data.coordsY1, gameinfo.data.coordsX1, gameinfo.data.coordsY2, gameinfo.data.coordsX2


    },
    match4: async function (y1, x1, y2, x2, color) {
        await tickrate.timer.sleep((7500 / gameinfo.data.animationSpeed) / gameinfo.data.speedUpMultiplier)
        const colors = ['R', 'Y', 'B']
        for (let i = 0; i < 3; i++) {
            gravity.matchH(colors[i])
            gravity.matchV(colors[i])
        }

    },
    matchV: function (pillColor) {

        var matchTab = []
        for (let x = 0; x < 8; x++) {
            var matchingTile = pillColor
            var match4 = 0
            var topCount = 0
            for (let y = 0; y < 16; y++) {
                let tileColor = document.getElementById(y + '_' + x).data.state.slice(-1)
                if (tileColor == matchingTile) {
                    match4++
                    if (topCount < match4) { topCount = match4 }
                } else {
                    match4 = 0
                }
            }
            matchTab[x] = topCount
        }
        var deletusList = []
        matchTab.forEach((element, index) => {
            if (element >= 4) {
                var counter = 0
                var found = false
                var startingY
                var finalY
                //console.log(element + ' ' + index)
                for (let y = 0; y < 16; y++) {
                    var color = document.getElementById(y + '_' + index).data.state.slice(-1)

                    if (color == pillColor) {
                        counter++
                        if (counter >= 4) { found = true; finalY = startingY }
                        if (counter == 1) { startingY = y }
                    } else { counter = 0; startingY = 0 }
                }
                console.log('finalY' + finalY)
                for (let y = finalY; y < 16; y++) {
                    let tile = document.getElementById(y + '_' + index)
                    //console.log(index + ' ' + y)
                    if (tile.data.state.slice(-1) == pillColor) {
                        deletusList[deletusList.length] = tile
                    } else { y = 17 }
                }
            }
        });
        try {
            //console.log(deletusList)
            gravity.FetusDeletus(deletusList, pillColor)
        } catch { }
    },
    matchH: function (pillColor) {
        var matchTab = []
        for (let y = 0; y < 16; y++) {
            var matchingTile = pillColor
            var match4 = 0
            var topCount = 0
            for (let x = 0; x < 8; x++) {
                let tileColor = document.getElementById(y + '_' + x).data.state.slice(-1)
                if (tileColor == matchingTile) {
                    match4++
                    if (topCount < match4) { topCount = match4 }
                } else {
                    match4 = 0
                }
            }
            matchTab[y] = topCount
        }
        var deletusList = []
        matchTab.forEach((element, index) => {

            if (element >= 4) {
                var counter = 0
                var found = false
                var startingX
                var finalX
                //console.log(element + ' ' + index)
                for (let x = 0; x < 8; x++) {
                    var color = document.getElementById(index + '_' + x).data.state.slice(-1)

                    if (color == pillColor) {
                        counter++
                        if (counter >= 4) { found = true; finalX = startingX }
                        if (counter == 1) { startingX = x }
                    } else { counter = 0; startingX = 0 }
                }
                //console.log('finalX' + finalX)

                for (let x = finalX; x < 8; x++) {
                    let tile = document.getElementById(index + '_' + x)
                    //console.log(index + ' ' + x)
                    if (tile.data.state.slice(-1) == pillColor) {

                        deletusList[deletusList.length] = tile

                        //tile.style.backgroundImage = ''
                        //tile.data.state = 'empty'

                    } else { x = 9 }
                }

            }

        });

        try {
            // console.log(deletusList)
            gravity.FetusDeletus(deletusList, pillColor)
        } catch { }


    },
    FetusDeletus: async function (fetusList, color) {
        // console.log(fetusList)
        if (fetusList != undefined && fetusList != null) {
            fetusList.forEach((element) => {
                if (element.data.state.slice(0, 5) == 'virus') {
                    element.style.backgroundImage = 'url("assets/bottle/x' + color + '.png")'
                    let gameinfo = document.getElementById('pill-grid')
                    gameinfo.data.scoreToAdd += 100

                    if (color == 'R') { gameinfo.data.RedLiving-- }
                    if (color == 'Y') { gameinfo.data.YellowLiving-- }
                    if (color == 'B') { gameinfo.data.BlueLiving-- }

                } else {
                    element.style.backgroundImage = 'url("assets/bottle/o' + color + '.png")'
                }


            });

            let gameinfo = document.getElementById('pill-grid')
            await tickrate.timer.sleep((8000 / gameinfo.data.animationSpeed) / gameinfo.data.speedUpMultiplier)

            fetusList.forEach((element) => {
                element.style.backgroundImage = ''
                element.data.state = 'empty'

            });
        }
        score.UpdateScore()
    }
}






/*

                let tile = document.getElementById(y + '_' + x).data.state.slice(-1)

                if (matchingTile == tile) {
                    match4++
                } else {
                    match4 = 0
                    startingTile = document.getElementById(y + '_' + x).id
                    if (matchHappened) {

                        for (let c = parseInt(startingTile.slice(-1)); c < x; c++) {
                            matchTab[matchTab.length] = c + '_' + y
                        }

                        break
                    }
                }
                if (match4 >= 3) {
                    var matchHappened = true
                    console.log('match over 4!')
                }
                console.log(tile + match4)

*/
