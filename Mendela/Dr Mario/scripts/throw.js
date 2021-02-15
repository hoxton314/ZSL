'use strict'
var pillThrow = {
    handAnim: async function () {
        let gameinfo = document.getElementById('pill-grid')
        let colors = gameinfo.data.waitingPill
        let hand = document.getElementById("hand")

        hand.style.backgroundImage = 'url("assets/hand-throw1.png")'
        pillThrow.pillAnim(colors)
        await tickrate.timer.sleep(1000 / gameinfo.data.animationSpeed)
        hand.style.backgroundImage = 'url("assets/hand-calm.png")'

        while (gameinfo.data.handCalm) {
            await tickrate.timer.sleep(100 / gameinfo.data.animationSpeed)
        }

        hand.style.backgroundImage = 'url("assets/hand-throw2.png")'
    },
    pillAnim: async function () {
        let gameinfo = document.getElementById('pill-grid')
        let colors = gameinfo.data.waitingPill
        gameinfo.data.throw = false

        function swapColor(color) {
            return color.charAt(1) + color.charAt(0)
        }


        let animationTable = []
        animationTable[0] = { pos1: "left", pos2: "right", top1: "72px", left1: "720px", top2: "72px", left2: "744px", color: colors }
        animationTable[1] = { pos1: "top", pos2: "bot", top1: "48px", left1: "720px", top2: "72px", left2: "720px", color: colors }
        animationTable[2] = { pos1: "left", pos2: "right", top1: "48px", left1: "696px", top2: "48px", left2: "720px", color: swapColor(colors) }
        animationTable[3] = { pos1: "top", pos2: "bot", top1: "24px", left1: "696px", top2: "48px", left2: "696px", color: swapColor(colors) }
        animationTable[4] = { pos1: "left", pos2: "right", top1: "24px", left1: "672px", top2: "24px", left2: "696px", color: colors }
        animationTable[5] = { pos1: "top", pos2: "bot", top1: "0px", left1: "672px", top2: "24px", left2: "672px", color: colors }
        animationTable[6] = { pos1: "left", pos2: "right", top1: "24px", left1: "648px", top2: "24px", left2: "672px", color: swapColor(colors) }
        animationTable[7] = { pos1: "top", pos2: "bot", top1: "0px", left1: "648px", top2: "24px", left2: "648px", color: swapColor(colors) }
        animationTable[8] = { pos1: "left", pos2: "right", top1: "24px", left1: "624px", top2: "24px", left2: "648px", color: colors }
        animationTable[9] = { pos1: "top", pos2: "bot", top1: "0px", left1: "624px", top2: "24px", left2: "624px", color: colors }
        animationTable[10] = { pos1: "left", pos2: "right", top1: "24px", left1: "600px", top2: "24px", left2: "624px", color: swapColor(colors) }
        animationTable[11] = { pos1: "top", pos2: "bot", top1: "0px", left1: "600px", top2: "24px", left2: "600px", color: swapColor(colors) }
        animationTable[12] = { pos1: "left", pos2: "right", top1: "24px", left1: "576px", top2: "24px", left2: "600px", color: colors }
        animationTable[13] = { pos1: "top", pos2: "bot", top1: "0px", left1: "576px", top2: "24px", left2: "576px", color: colors }
        animationTable[14] = { pos1: "left", pos2: "right", top1: "24px", left1: "552px", top2: "24px", left2: "576px", color: swapColor(colors) }
        animationTable[15] = { pos1: "top", pos2: "bot", top1: "0px", left1: "552px", top2: "24px", left2: "552px", color: swapColor(colors) }
        animationTable[16] = { pos1: "left", pos2: "right", top1: "24px", left1: "528px", top2: "24px", left2: "552px", color: colors }
        animationTable[17] = { pos1: "top", pos2: "bot", top1: "0px", left1: "528px", top2: "24px", left2: "528px", color: colors }
        animationTable[18] = { pos1: "left", pos2: "right", top1: "48px", left1: "504px", top2: "48px", left2: "528px", color: swapColor(colors) }
        animationTable[19] = { pos1: "top", pos2: "bot", top1: "24px", left1: "528px", top2: "48px", left2: "528px", color: swapColor(colors) }
        animationTable[20] = { pos1: "left", pos2: "right", top1: "48px", left1: "480px", top2: "48px", left2: "504px", color: swapColor(colors) }
        animationTable[21] = { pos1: "left", pos2: "right", top1: "72px", left1: "480px", top2: "72px", left2: "504px", color: swapColor(colors) }

        let img1
        let img2

        img1 = document.createElement('IMG')
        img2 = document.createElement('IMG')
        img1.id = 'Anim1'
        img2.id = 'Anim2'
        document.getElementById('game-container').appendChild(img1)
        document.getElementById('game-container').appendChild(img2)
        img1 = document.getElementById('Anim1')
        img2 = document.getElementById('Anim2')
        img1.style.position = "absolute"
        img2.style.position = "absolute"

        document.getElementById('waitingPill1').src = ''
        document.getElementById('waitingPill2').src = ''

        for (let i = 0; i < animationTable.length; i++) {
            img1.style.left = animationTable[i].left1
            img1.style.top = animationTable[i].top1
            img2.style.left = animationTable[i].left2
            img2.style.top = animationTable[i].top2
            img2.src = 'assets/bottle/' + animationTable[i].pos2 + animationTable[i].color.slice(0, -1) + '.png'
            img1.src = 'assets/bottle/' + animationTable[i].pos1 + animationTable[i].color.slice(1) + '.png'

            await tickrate.timer.sleep(200 / gameinfo.data.animationSpeed)
            if (i == (animationTable.length - 1)) { await tickrate.timer.sleep(1000 / gameinfo.data.animationSpeed) }

        }

        //img2.style.transform = 'rotate(90deg)'



        img1.outerHTML = ''
        img2.outerHTML = ''
        console.log("stop")
        gameinfo.data.pillToFall = gameinfo.data.waitingPill
        gameinfo.data.waitingPill = randomize.color() + randomize.color()

        document.getElementById('waitingPill1').src = 'assets/bottle/left' + gameinfo.data.waitingPill.slice(0, -1) + '.png'
        document.getElementById('waitingPill2').src = 'assets/bottle/right' + gameinfo.data.waitingPill.slice(1) + '.png'

        gameinfo.data.handCalm = false
        gameinfo.data.gravity = true
        return await 0
    }

}