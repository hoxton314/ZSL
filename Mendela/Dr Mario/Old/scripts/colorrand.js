
function colorpickerUrl(number) {
    switch (number) {
        case 0:
            return 'url("assets/bottle/virus_blue.png")'
        case 1:
            return 'url("assets/bottle/virus_yellow.png")'
        case 2:
            return 'url("assets/bottle/virus_red.png")'
    }
}
function colorpickerGameinfo(number) {
    switch (number) {
        case 0:
            return "virusB"
        case 1:
            return "virusY"
        case 2:
            return "virusR"
    }
}