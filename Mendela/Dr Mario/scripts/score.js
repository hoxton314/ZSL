'use strict'
var score = {
    UpdateScore: function () {
        let scoreContainer = document.getElementById('score-counter')
        scoreContainer.innerHTML = ''
        let gameinfo = document.getElementById('pill-grid')
        gameinfo.data.score += gameinfo.data.scoreToAdd
        let score = gameinfo.data.score
        let scoreLength = gameinfo.data.score.toString().length
        let imgNum


        for (let i = 0; i < (7 - scoreLength); i++) {
            imgNum = document.createElement('img')
            imgNum.src = 'assets/cyfry/' + 0 + '.png'
            imgNum.id = "zero" + i
            imgNum.className = "digit"
            scoreContainer.appendChild(imgNum)
        }

        for (let i = 0; i < (scoreLength); i++) {
            imgNum = document.createElement('img')
            imgNum.src = 'assets/cyfry/' + (parseInt(score.toString().charAt(i))) + '.png'
            imgNum.id = "digit" + i
            imgNum.className = "digit"
            scoreContainer.appendChild(imgNum)
        }
        gameinfo.data.scoreToAdd = 0
    },
    UpdateBest: function (score) {

    },
    Create: function () {
        let img = document.createElement('IMG')
        img.src = "./assets/0.png"
        for (let i = 0; i < 7; i++) {
            document.getElementById('score-counter').appendChild(img)
            document.getElementById('top-counter').appendChild(img)
        }


    }
}