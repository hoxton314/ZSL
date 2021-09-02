
var rotate = {
    spin: function () {

        var rotate1 = Math.PI;
        var rotate2 = Math.PI + 2;
        var rotate3 = Math.PI + 4;

        async function rotation() {

            var gameinfo = document.getElementById('pill-grid')
            var frame
            while (gameinfo.data.lose == false && gameinfo.data.lose == false) {
                if (gameinfo.data.BlueLiving > 0) {
                    frame = 2
                    document.getElementById("VirusB").style.top = 100 + Math.sin(rotate1) * 65 + "px";
                    document.getElementById("VirusB").style.left = 100 + Math.cos(rotate1) * 65 + "px";
                }
                if (gameinfo.data.BlueLiving == 0) {
                    gameinfo.data.BlueLiving = -1
                    document.getElementById("VirusB").parentElement.removeChild(document.getElementById("VirusB"))
                }

                if (gameinfo.data.YellowLiving > 0) {
                    document.getElementById("VirusY").style.top = 100 + Math.sin(rotate2) * 65 + "px";
                    document.getElementById("VirusY").style.left = 100 + Math.cos(rotate2) * 65 + "px";
                }
                if (gameinfo.data.YellowLiving == 0) {
                    gameinfo.data.YellowLiving = -1
                    document.getElementById("VirusY").parentElement.removeChild(document.getElementById("VirusY"))
                }

                if (gameinfo.data.RedLiving > 0) {
                    document.getElementById("VirusR").style.top = 100 + Math.sin(rotate3) * 65 + "px";
                    document.getElementById("VirusR").style.left = 100 + Math.cos(rotate3) * 65 + "px";
                }
                if (gameinfo.data.RedLiving == 0) {
                    gameinfo.data.RedLiving = -1
                    document.getElementById("VirusR").parentElement.removeChild(document.getElementById("VirusR"))
                }


                if (gameinfo.data.BlueLiving > 0) { document.getElementById("VirusB").src = 'assets/virus/blue' + frame + '.png' }
                if (gameinfo.data.YellowLiving > 0) { document.getElementById("VirusY").src = 'assets/virus/yellow' + frame + '.png' }
                if (gameinfo.data.RedLiving > 0) { document.getElementById("VirusR").src = 'assets/virus/red' + frame + '.png' }

                rotate1 -= 0.5;
                rotate2 -= 0.5;
                rotate3 -= 0.5;

                await tickrate.timer.sleep(5000 / gameinfo.data.animationSpeed)

                frame = 1
                if (gameinfo.data.BlueLiving > 0) { document.getElementById("VirusB").src = 'assets/virus/blue' + frame + '.png' }
                if (gameinfo.data.YellowLiving > 0) { document.getElementById("VirusY").src = 'assets/virus/yellow' + frame + '.png' }
                if (gameinfo.data.RedLiving > 0) { document.getElementById("VirusR").src = 'assets/virus/red' + frame + '.png' }
                await tickrate.timer.sleep(5000 / gameinfo.data.animationSpeed)

                frame = 3
                if (gameinfo.data.BlueLiving > 0) { document.getElementById("VirusB").src = 'assets/virus/blue' + frame + '.png' }
                if (gameinfo.data.YellowLiving > 0) { document.getElementById("VirusY").src = 'assets/virus/yellow' + frame + '.png' }
                if (gameinfo.data.RedLiving > 0) { document.getElementById("VirusR").src = 'assets/virus/red' + frame + '.png' }
                await tickrate.timer.sleep(5000 / gameinfo.data.animationSpeed)



            }
        }

        rotation()

    },
    spinLost: async function () {
        var frame = 4
        while (true) {
            if (frame == 4) { frame = 2 } else { frame = 4 }
            try { document.getElementById("VirusB").src = 'assets/virus/blue' + frame + '.png' } catch { }
            try { document.getElementById("VirusY").src = 'assets/virus/yellow' + frame + '.png' } catch { }
            try { document.getElementById("VirusR").src = 'assets/virus/red' + frame + '.png' } catch { }
            await tickrate.timer.sleep(5000 / gameinfo.data.animationSpeed)
        }

    }
}






