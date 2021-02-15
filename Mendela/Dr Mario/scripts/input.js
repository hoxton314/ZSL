'use strict'
/* 
 * ArrowUp      = 38
 * ArrowLeft    = 37
 * ArrowDown    = 40
 * ArrowRight   = 39
 * KeyW         = 87
 * KeyA         = 65
 * KeyS         = 83
 * KeyD         = 68
 * Shift        = 16
 * KeyQ         = 81
*/

document.body.onkeydown = async (e) => {
    let gameinfo = document.getElementById('pill-grid')

    try {
        //rotation = FUNCS.pill.get_rotation(pill[0])
    } catch {
        return
    }

    if (gameinfo.data.falling) {
        switch (e.keyCode) {
            case 38:
            case 87:
                let fired = false
                if (!fired) {
                    fired = true;
                    console.log(87)
                }
                break

            case 16:
            case 81:
                console.log(81)
                break

            case 37:
            case 65:
                console.log(65)

                break

            case 40:
            case 83:
                console.log(83)
                break

            case 39:
            case 68:
                console.log(68)
                break

            default:
                break
        }
    }
}


document.body.onkeyup = async (e) => {
    switch (e.keyCode) {
        case 38:
        case 87:
            console.log(87 + "stop")
            break

        case 16:
        case 81:
            console.log(81 + "stop")
            break

        case 37:
        case 65:
            console.log(65 + "stop")

            break

        case 40:
        case 83:
            console.log(83 + "stop")
            break

        case 39:
        case 68:
            console.log(68 + "stop")
            break

        default:
            break
    }
}
