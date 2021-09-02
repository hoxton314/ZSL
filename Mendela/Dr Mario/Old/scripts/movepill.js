async function movePill() {
    var pillImg
    var gravitylevelcounter
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 50));
        if (document.getElementById("game-container").notCollided) {
            switch (document.getElementById("game-container").keyaction) {
                case "left":
                    try {
                        pillImg = document.getElementById("fallingPill")
                        gravitylevelcounter = parseInt(pillImg.style.top.slice(0, -2)) / 24
                        let wallCheck = parseInt(pillImg.style.left.slice(0, -2)) > 0
                        let lefttileemptyCheck = (document.getElementById((gravitylevelcounter) + "-" + (-1 + (parseInt(pillImg.style.left.slice(0, -2)) / 24))).gameinfo == "empty")
                        if (wallCheck && lefttileemptyCheck) {
                            document.getElementById("game-container").keyaction = null
                            console.log('left');
                            pillImg.style.left = (parseInt(pillImg.style.left.slice(0, -2)) - 24) + "px";
                        }

                        await new Promise(resolve => setTimeout(resolve, 50));
                    } catch (error) { }
                    break;
                case "rotate":
                    pillImg = document.getElementById("fallingPill")
                    document.getElementById("game-container").keyaction = null
                    console.log('up');
                    if (document.getElementById("game-container").fallingPillPos = "h") {
                        document.getElementById("game-container").fallingPillPos = "v"

                    }


                    await new Promise(resolve => setTimeout(resolve, 50));
                    break;
                case "right":
                    try {
                        pillImg = document.getElementById("fallingPill")
                        gravitylevelcounter = parseInt(pillImg.style.top.slice(0, -2)) / 24
                        let horizontalCheck = document.getElementById("game-container").fallingPillPos == "h" && parseInt(pillImg.style.left.slice(0, -2)) < 144
                        let verticalCheck = document.getElementById("game-container").fallingPillPos == "v" && parseInt(pillImg.style.left.slice(0, -2)) < 168
                        let righttileemptyCheck = (document.getElementById((gravitylevelcounter) + "-" + (2 + (parseInt(pillImg.style.left.slice(0, -2)) / 24))).gameinfo == "empty")
                        let finalCheck = (horizontalCheck || verticalCheck) && righttileemptyCheck
                        if (finalCheck) {
                            document.getElementById("game-container").keyaction = null
                            console.log('right');
                            pillImg.style.left = (parseInt(pillImg.style.left.slice(0, -2)) + 24) + "px";
                        }
                        await new Promise(resolve => setTimeout(resolve, 50));
                    } catch (error) { }
                    break;
                case "speedUp":
                    pillImg = document.getElementById("fallingPill")
                    document.getElementById("game-container").keyaction = null
                    console.log('down');
                    document.getElementById("game-container").fallingspeed = 50


                    await new Promise(resolve => setTimeout(resolve, 50));
                    break;
            }
        }
    }
}


try {
} catch (error) { }