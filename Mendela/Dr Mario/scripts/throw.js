async function pillThrow() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 100));

        if (document.getElementById("game-container").throwReady) {
            document.getElementById("game-container").throwReady = false
            //0=blue,1=yellow,2=red pill
            let color1
            let color2
            color1 = Math.floor(Math.random() * (3))
            color2 = Math.floor(Math.random() * (3))
            color1 = colorpickerGameinfo(color1).slice(-1)
            color2 = colorpickerGameinfo(color2).slice(-1)

            let animationTable = []
            animationTable[0] = { pos: "h", top: "72px", left: "720px" }
            animationTable[1] = { pos: "v", top: "48px", left: "720px" }
            animationTable[2] = { pos: "h", top: "48px", left: "696px" }
            animationTable[3] = { pos: "v", top: "24px", left: "696px" }
            animationTable[4] = { pos: "h", top: "24px", left: "672px" }
            animationTable[5] = { pos: "v", top: "0px", left: "672px" }
            animationTable[6] = { pos: "h", top: "24px", left: "648px" }
            animationTable[7] = { pos: "v", top: "0px", left: "648px" }
            animationTable[8] = { pos: "h", top: "24px", left: "624px" }
            animationTable[9] = { pos: "v", top: "0px", left: "624px" }
            animationTable[10] = { pos: "h", top: "24px", left: "600px" }
            animationTable[11] = { pos: "v", top: "0px", left: "600px" }
            animationTable[12] = { pos: "h", top: "24px", left: "576px" }
            animationTable[13] = { pos: "v", top: "0px", left: "576px" }
            animationTable[14] = { pos: "h", top: "24px", left: "552px" }
            animationTable[15] = { pos: "v", top: "0px", left: "552px" }
            animationTable[16] = { pos: "h", top: "24px", left: "528px" }
            animationTable[17] = { pos: "v", top: "0px", left: "528px" }
            animationTable[18] = { pos: "h", top: "48px", left: "504px" }
            animationTable[19] = { pos: "v", top: "24px", left: "528px" }
            animationTable[20] = { pos: "h", top: "48px", left: "480px" }
            animationTable[21] = { pos: "h", top: "72px", left: "480px" }
            animationTable[22] = { pos: "h", top: "96px", left: "480px" }
            animationTable[23] = { pos: "h", top: "120px", left: "480px" }

            let pillImg = document.createElement("img");
            pillImg.setAttribute("src", "assets/pillanim/full-" + color1 + color2 + "-" + animationTable[0].pos + ".png");
            pillImg.style.position = "absolute";
            pillImg.style.left = animationTable[0].left;
            pillImg.style.top = animationTable[0].top;
            pillImg.id = "animatedPill";
            document.getElementById("game-container").appendChild(pillImg);
            pillImg = document.getElementById("animatedPill")
            for (i = 1; i < 24; i++) {
                await new Promise(resolve => setTimeout(resolve, 20));
                pillImg.style.left = animationTable[i].left;
                pillImg.style.top = animationTable[i].top;
                pillImg.setAttribute("src", "assets/pillanim/full-" + color1 + color2 + "-" + animationTable[i].pos + ".png");
            }
            document.getElementById("game-container").pilltoBottle = color1 + color2
            await new Promise(resolve => setTimeout(resolve, 50));
            document.getElementById("game-container").pillGravity = true
            await new Promise(resolve => setTimeout(resolve, 50));
            pillImg.parentNode.removeChild(pillImg)
        }
    }

}