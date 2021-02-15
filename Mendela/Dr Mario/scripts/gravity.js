'use strict'
let gameinfo = document.getElementById('pill-grid')

var gravity = {
    fallingPill: async function (colors) {
        gameinfo.data.gravity = false
        let pill1 = 'url("assets/bottle/left' + colors.slice(0, -1) + '.png")'
        let pill2 = 'url("assets/bottle/right' + colors.slice(1) + '.png")'
        let coordsX1 = 3
        let coordsY1 = -2
        let coordsX2 = 4
        let coordsY2 = -2
        let below1 = document.getElementById((coordsY1 + 1) + '_' + (coordsX1))
        let below2 = document.getElementById((coordsY2 + 1) + '_' + (coordsX2))


        gravity.assignPill(coordsY1, coordsX1, coordsY2, coordsX2, colors)


        if (below1.data.state == 'empty' && below2.data.state == 'empty') {
            gameinfo.data.falling = true
        } else {
            gameinfo.data.falling = false
        }
        //gameinfo.data.falling = false
        while (gameinfo.data.falling) {
            if (coordsY1 > 14 || coordsY2 > 14) {
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
            gravity.removePill(coordsY1, coordsX1, coordsY2, coordsX2, colors)
            coordsY1++
            coordsY2++

            gravity.assignPill(coordsY1, coordsX1, coordsY2, coordsX2, colors)

            below1 = document.getElementById((coordsY1 + 1) + '_' + (coordsX1))
            below2 = document.getElementById((coordsY2 + 1) + '_' + (coordsX2))
            await tickrate.timer.sleep(7500 / gameinfo.data.animationSpeed)
        }
    },
    bottle: async function () {

    },
    assignPill: function (y1, x1, y2, x2, colors) {

        if (y1 == y2) {
            document.getElementById(y1 + '_' + x1).style.backgroundImage = 'url("assets/bottle/left' + colors.slice(0, -1) + '.png")'
            document.getElementById(y2 + '_' + x2).style.backgroundImage = 'url("assets/bottle/right' + colors.slice(1) + '.png")'
            document.getElementById(y1 + '_' + x1).data.state = "pill" + colors.slice(0, -1)
            document.getElementById(y2 + '_' + x2).data.state = "pill" + colors.slice(1)
        }
        if (x1 == x2) {
            document.getElementById(y1 + '_' + x1).style.backgroundImage = 'url("assets/bottle/top' + colors.slice(0, -1) + '.png")'
            document.getElementById(y2 + '_' + x2).style.backgroundImage = 'url("assets/bottle/bot' + colors.slice(1) + '.png")'
            document.getElementById(y1 + '_' + x1).data.state = "pill" + colors.slice(0, -1)
            document.getElementById(y2 + '_' + x2).data.state = "pill" + colors.slice(1)
        }

    },
    removePill: function (y1, x1, y2, x2) {
        document.getElementById(y1 + '_' + x1).style.backgroundImage = ''
        document.getElementById(y2 + '_' + x2).style.backgroundImage = ''
        document.getElementById(y1 + '_' + x1).data.state = "empty"
        document.getElementById(y2 + '_' + x2).data.state = "empty"
    }
}