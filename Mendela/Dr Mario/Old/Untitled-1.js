/*
animationTable[0]={pos: "h", top: "72px", left: "720px"}
animationTable[0]={pos: "v", top: "48px", left: "720px"}
animationTable[0]={pos: "h", top: "72px", left: "696px"}
animationTable[0]={pos: "v", top: "24px", left: "720px"}
animationTable[0]={pos: "h", top: "72px", left: "672px"}
animationTable[0]={pos: "v", top: "0px", left: "720px"}
animationTable[0]={pos: "h", top: "24px", left: "648px"}
animationTable[0]={pos: "v", top: "0px", left: "648px"}
animationTable[0]={pos: "h", top: "24px", left: "624px"}
animationTable[0]={pos: "v", top: "0px", left: "624px"}
animationTable[0]={pos: "h", top: "24px", left: "600px"}
animationTable[0]={pos: "v", top: "0px", left: "600px"}
animationTable[0]={pos: "h", top: "24px", left: "576px"}
animationTable[0]={pos: "v", top: "0px", left: "576px"}
animationTable[0]={pos: "h", top: "24px", left: "552px"}
animationTable[0]={pos: "v", top: "0px", left: "552px"}
animationTable[0]={pos: "h", top: "24px", left: "528px"}
animationTable[0]={pos: "v", top: "0px", left: "528px"}
animationTable[0]={pos: "h", top: "48px", left: "504px"}
animationTable[0]={pos: "v", top: "24px", left: "528px"}
animationTable[0]={pos: "h", top: "48px", left: "480px"}
animationTable[0]={pos: "h", top: "72px", left: "480px"}
animationTable[0]={pos: "h", top: "96px", left: "480px"}
animationTable[0]={pos: "h", top: "120px", left: "480px" }
*/

animationTable = []
animationTable[0] = { pos: "h", top: "72px", left: "720px" }
animationTable[1] = { pos: "v", top: "48px", left: "720px" }
animationTable[2] = { pos: "h", top: "72px", left: "696px" }
animationTable[3] = { pos: "v", top: "24px", left: "720px" }
animationTable[4] = { pos: "h", top: "72px", left: "672px" }
animationTable[5] = { pos: "v", top: "0px", left: "720px" }
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



async function test() {
    var d = new Date().getTime()
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1));
        if (d + 500 < new Date().getTime()) {
            d = new Date().getTime()
            console.log(d)
        }

    }
}

1612529008296 debugger eval code: 7: 21
1612529008811 debugger eval code: 7: 21
1612529009325 debugger eval code: 7: 21
1612529009840

d = new Date().getTime()
1612527720382




tilecoords