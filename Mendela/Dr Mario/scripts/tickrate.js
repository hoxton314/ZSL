"use strict"
var tickrate = {
    timer: {
        time_diff: async function (start) { return Date.now() - start },
        sleep: async function (time) { await new Promise(r => setTimeout(r, time)) }
    }
}
