'use strict'
var randomize = {
    virusImg: function (number) {
        const virusImg = [
            'url("assets/bottle/virus_blue.png")',
            'url("assets/bottle/virus_yellow.png")',
            'url("assets/bottle/virus_red.png")'
        ]
        return virusImg[number]
    },
    virus: function (number) {
        const virus = ['virusB', 'virusY', 'virusR']
        return virus[number]
    },
    color: function () {
        const colorRand = ['B', 'Y', 'R']
        return colorRand[Math.floor(Math.random() * (3))]
    },
    cell: function () {
        return Math.floor(Math.random() * (15 - 5) + 5) + "_" + Math.floor(Math.random() * (7));
    }
}