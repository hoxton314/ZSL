async function pillgravity() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (document.getElementById("game-container").pillGravity) {

            document.getElementById("game-container").pillGravity = false

            let pillColors = document.getElementById("game-container").pilltoBottle
            console.log(pillColors)

            let pillImg = document.createElement("img");
            document.getElementById("game-container").fallingPillPos = "h"
            pillImg.setAttribute("src", "assets/pillanim/full-" + pillColors + "-" + document.getElementById("game-container").fallingPillPos + ".png");
            pillImg.style.position = "absolute";
            pillImg.style.left = "72px";
            pillImg.style.top = "0px";
            pillImg.id = "fallingPill";
            document.getElementById("pill-grid").appendChild(pillImg);
            pillImg = document.getElementById("fallingPill")

            document.getElementById("game-container").notCollided = true
            let gravitylevelcounter = 1
            while (document.getElementById("game-container").notCollided) {
                try {
                    var leftcolision = (document.getElementById(gravitylevelcounter + "-" + (parseInt(pillImg.style.left.slice(0, -2)) / 24)).gameinfo != "empty")
                    var rightcolision = (document.getElementById(gravitylevelcounter + "-" + (1 + (parseInt(pillImg.style.left.slice(0, -2)) / 24))).gameinfo != "empty")
                } catch (error) { }
                let bottomcolision = gravitylevelcounter == 16
                if (leftcolision || rightcolision || bottomcolision) {
                    if (gravitylevelcounter == 1) {
                        alert("koniec gry")
                    }
                    await new Promise(resolve => setTimeout(resolve, 250));
                    pillImg.id = "fallenPill"
                    document.getElementById("game-container").notCollided = false
                    console.log("kolizja")
                    if (document.getElementById("game-container").fallingPillPos == "h") {
                        document.getElementById((gravitylevelcounter - 1) + "-" + (parseInt(pillImg.style.left.slice(0, -2)) / 24)).gameinfo = "pill" + pillColors.slice(0, 1)
                        document.getElementById((gravitylevelcounter - 1) + "-" + (1 + (parseInt(pillImg.style.left.slice(0, -2)) / 24))).gameinfo = "pill" + pillColors.slice(1)
                        pillImg.id = "fallenPill-" + pillImg.style.top.slice(0, -2) + "-" + pillImg.style.left.slice(0, -2)
                    }
                    if (document.getElementById("game-container").fallingPillPos == "v") {
                        document.getElementById((gravitylevelcounter - 1) + "-" + ((parseInt(pillImg.style.left.slice(0, -2)) / 24) - 1)).gameinfo = "pill" + pillColors.slice(0, 1)
                        document.getElementById((gravitylevelcounter - 1) + "-" + (parseInt(pillImg.style.left.slice(0, -2)) / 24)).gameinfo = "pill" + pillColors.slice(1)
                        pillImg.id = "fallenPill-" + pillImg.style.top.slice(0, -2) + "-" + pillImg.style.left.slice(0, -2)
                    }
                    document.getElementById("game-container").throwReady = true
                }

                await new Promise(resolve => setTimeout(resolve, document.getElementById("game-container").fallingspeed));
                //pillImg.style.left = pillImg.style.left.slice(0,-2);
                if (document.getElementById("game-container").notCollided) {
                    pillImg.style.top = (parseInt(pillImg.style.top.slice(0, -2)) + 24) + "px";
                    gravitylevelcounter++
                }

            }

            //document.getElementById("0-3").style.backgroundImage = "url('assets/bottle/left" + pillColors.charAt(0) + ".png')"
            //document.getElementById("0-4").style.backgroundImage = "url('assets/bottle/right" + pillColors.charAt(1) + ".png')"
        }


        /*while (emptySpace) {
            tickrate()
            document.getElementById("game-container").pillGravity = false
            let pillColors = pillgravity(document.getElementById("game-container").pilltoBottle)
            document.getElementById("0-3").style.backgroundImage = "url('assets/bottle/left" + pillColors.charAt(0) + ".png')"
            document.getElementById("0-4").style.backgroundImage = "url('assets/bottle/left" + pillColors.charAt(1) + + ".png')"
        }*/
    }
}