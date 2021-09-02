function spawn() {
    var virusID = []
    let virusTile
    let virusColor
    while (virusID.length < 4) {
        let r = Math.floor(Math.random() * (15 - 5) + 5) + "-" + Math.floor(Math.random() * (7));
        if (virusID.indexOf(r) === -1) virusID.push(r);
    }
    for (i = 0; i < 4; i++) {
        virusTile = document.getElementById(virusID[i])
        virusColor = i
        if (i == 3) {
            virusColor = Math.floor(Math.random() * (3))
        }
        virusColor = colorpickerUrl(virusColor)
        virusTile.gameinfo = colorpickerGameinfo(virusColor)
        virusTile.style.backgroundImage = virusColor
    }
}

