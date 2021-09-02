'use strict'


var table = {
    Create: function () {
        let bottle = document.getElementById('pill-grid')
        let bottleTable = document.createElement('TABLE')
        bottleTable.id = 'bottle-table'
        bottle.appendChild(bottleTable)

        for (let i = -2; i < 16; i++) {
            let tableRow = null
            tableRow = document.createElement('TR')
            tableRow.className = 'table-row'
            tableRow.id = 'row' + i
            for (let l = 0; l < 8; l++) {
                let tableCell = null
                tableCell = document.createElement('TH')
                tableCell.className = 'cell'
                tableCell.id = i + '_' + l
                tableCell.data = { state: 'empty' }
                tableRow.appendChild(tableCell)
            }
            document.getElementById('bottle-table').appendChild(tableRow)
        }
    },
    VirusSpawn: function (count) {
        var virusID = []
        let virusTile
        let virusImg
        let bottle = document.getElementById('pill-grid')

        while (virusID.length < count) {
            let r = randomize.cell()
            if (virusID.indexOf(r) === -1) virusID.push(r);
        }

        for (var i = 0; i < count; i++) {
            virusTile = document.getElementById(virusID[i])
            virusImg = randomize.virusImg(i % 3)
            virusTile.data.state = randomize.virus(i % 3)
            bottle.data.viruses[i] = virusID[i]
            virusTile.style.backgroundImage = virusImg
        }
    }
};