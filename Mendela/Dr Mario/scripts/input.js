function controls() {
    document.addEventListener('keyup', keyreset);
    function keyreset() {
        document.getElementById("game-container").keyaction = null
        document.getElementById("game-container").fallingspeed = 1000
    }
    document.onkeydown = function (e) {
        //console.log(e)
        switch (e.key) {
            case "ArrowLeft":
                document.getElementById("game-container").keyaction = "left"
                break;
            case "ArrowUp":
                document.getElementById("game-container").keyaction = "rotate"
                break;
            case "ArrowRight":
                document.getElementById("game-container").keyaction = "right"
                break;
            case "ArrowDown":
                document.getElementById("game-container").keyaction = "speedUp"
                break;
        }
    }


}
