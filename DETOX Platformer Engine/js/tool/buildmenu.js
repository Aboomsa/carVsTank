const menu = document.getElementById("buildmenu")
const snap = document.getElementById("snap")
const blocktype = document.getElementById("blocktype")
const buildcoordinaterel = document.getElementById("buildcoordinates")
const buildcoordinateabs = document.getElementById("abscoordinates")
const buildcoordinatesnap = document.getElementById("snapcoordinates")
const load = document.getElementById("load")
const save = document.getElementById("save")
const place = document.getElementById("place")
const output = document.getElementById("output")


let build = 0
let buildtext = ""
let file = ""


bs = {
    sourcex: 0,
    sourcey: 0,

    curwidth: 0,
    curlength: 0,

}

let BUILDTOOL = {
    snap: 10,
    blocktype: "block",

}

snap.onclick = function(){
    BUILDTOOL.snap *=10
    if(BUILDTOOL.snap == 1000) BUILDTOOL.snap = 1 
    
}


blocktype.onclick = function(){
    switch(true){
        case BUILDTOOL.blocktype == "replenisher":
            BUILDTOOL.blocktype = "block"
        break
        case BUILDTOOL.blocktype == "block":
            BUILDTOOL.blocktype = "hazard"
        break
        case BUILDTOOL.blocktype == "hazard":
            BUILDTOOL.blocktype = "replenisher"
        break
    }
    
}

place.onclick = function(){
    new Collision(bs.sourcex, bs.sourcey, bs.curwidth, bs.curlength, BUILDTOOL.blocktype)
    buildtext = buildtext + `new Collision(${bs.sourcex}, ${bs.sourcey}, ${bs.curwidth}, ${bs.curlength}, "${BUILDTOOL.blocktype}")
`
    
}

load.onclick = function(){
    showfile()
}
save.onclick = function(){
    bsave(buildtext)
}


function updatebuildmenu(){
    snap.innerText = `Snap: ${BUILDTOOL.snap}px`
    blocktype.innerText = `Block Type: ${BUILDTOOL.blocktype}`
    buildcoordinaterel.innerText = `relative[x${Math.round(amouse.x - relx + 29)}, y${Math.round(amouse.y - rely + 29)}]`
    buildcoordinateabs.innerText = `absolute[x${Math.round(amouse.x)}, y${Math.round(amouse.y)}]`
    buildcoordinatesnap.innerText = `snap[x${Math.round((amouse.x - relx + 29) / BUILDTOOL.snap) * BUILDTOOL.snap}, y${Math.round((amouse.y - rely + 29) / BUILDTOOL.snap) * BUILDTOOL.snap}]`


    if(build==1){
        bs.curwidth = Math.round((amouse.x - relx) / BUILDTOOL.snap) * BUILDTOOL.snap - bs.sourcex
        bs.curlength = Math.round((amouse.y - rely) / BUILDTOOL.snap) * BUILDTOOL.snap -  bs.sourcey
        output.style.color = "#606060"
        output.innerText = buildtext + `new Collision(${bs.sourcex}, ${bs.sourcey}, ${bs.curwidth}, ${bs.curlength}, "${BUILDTOOL.blocktype}")`
        if(buildtext == ""){
            output.innerText = "It is recommended to load a file before placing any blocks."
            output.style.color = "red"
        }
    }
    c.fillStyle = "#00de98";
    c.fillRect(bs.sourcex + relx, bs.sourcey + rely, bs.curwidth, bs.curlength);
}

canvas.onmousedown = function(){
    bs.sourcex = Math.round((amouse.x - relx) / BUILDTOOL.snap) * BUILDTOOL.snap
    bs.sourcey = Math.round((amouse.y - rely) / BUILDTOOL.snap) * BUILDTOOL.snap
    build = 1
    
}

canvas.onmouseup = function(){
    build = 0
}
