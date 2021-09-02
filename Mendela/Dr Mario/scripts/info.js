'use strict'
var info = {
    UpdateData: function (level, speed, virus) {
        let gameinfo = document.getElementById('pill-grid')
        gameinfo.data.level = level
        gameinfo.data.speed = speed
        gameinfo.data.virusCount = virus
    },
    Create: function () {
        let gameinfo = document.getElementById('pill-grid')
        let img = document.createElement('IMG')
        img.src = "./assets/" + gameinfo.data.speed + ".png"
        document.getElementById('speed-counter').appendChild(img)

        if (gameinfo.data.level < 10) {
            img = document.createElement('IMG')
            img.src = "./assets/cyfry/0.png"
            document.getElementById('level-counter').appendChild(img)
            img = document.createElement('IMG')
            img.src = "./assets/cyfry/" + gameinfo.data.level + ".png"
            document.getElementById('level-counter').appendChild(img)
        } else {
            img = document.createElement('IMG')
            img.src = "./assets/cyfry/" + (gameinfo.data.level).toString().slice(-2, 1) + ".png"
            document.getElementById('level-counter').appendChild(img)
            img = document.createElement('IMG')
            img.src = "./assets/cyfry/" + (gameinfo.data.level).toString().slice(1) + ".png"
            document.getElementById('level-counter').appendChild(img)
        }

        if (gameinfo.data.virusCount < 10) {
            img = document.createElement('IMG')
            img.src = "./assets/cyfry/0.png"
            document.getElementById('virus-counter').appendChild(img)
            img = document.createElement('IMG')
            img.src = "./assets/cyfry/" + gameinfo.data.virusCount + ".png"
            document.getElementById('virus-counter').appendChild(img)
        } else {
            img = document.createElement('IMG')
            img.src = "./assets/cyfry/" + (gameinfo.data.virusCount).toString().slice(-2, 1) + ".png"
            document.getElementById('virus-counter').appendChild(img)
            img = document.createElement('IMG')
            img.src = "./assets/cyfry/" + (gameinfo.data.virusCount).toString().slice(1) + ".png"
            document.getElementById('virus-counter').appendChild(img)
        }

    }
}