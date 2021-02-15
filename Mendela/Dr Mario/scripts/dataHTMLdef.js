'use strict'
var definition = {
    data: function () {
        document.getElementById('pill-grid').data = {
            viruses: [],
            win: false,
            lose: false,
            throw: false,
            gravity: false,
            score: 0,
            scoreTop: 0,
            level: null,
            speed: null,
            virusCount: null,
            currentPill: null,
            animationSpeed: 15,
            waitingPill: randomize.color() + randomize.color(),
            handCalm: true,
            scoreToAdd: 0,
            pillToThrow: null,
            rotate: false,
            left: false,
            right: false,
            speedUp: false,
            fallPillPos: 'h',
            falling: false,
        }
    },
    score: {
        create_storage: new Function('if(localStorage.getItem("dr_mario_score")===null){localStorage.setItem("dr_mario_score",100)}')
    },
    speed: {
        change: function () {
            if (document.getElementById('pill-grid').data.animationSpeed == 15) {
                document.getElementById('pill-grid').data.animationSpeed = 1
                document.getElementById("animationspeed").innerHTML = 'Game speed: slow'
            } else {
                document.getElementById('pill-grid').data.animationSpeed = 15
                document.getElementById("animationspeed").innerHTML = 'Game speed: normal'
            }
        }
    }
}
