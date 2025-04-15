const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

let amouse = {
    x: 0,
    y: 0
}

async function showfile(){
 [fileHandle] = await window.showOpenFilePicker();
 let FileData = await fileHandle.getFile();
 let text = await FileData.text();
 console.log(`Loaded in ${FileData}`)
 buildtext = text
 bsave(text)

}

async function bsave(text){
    let stream = await fileHandle.createWritable();
    await stream.write(text)
    await stream.close()
}






let weapon = "gun"


let relx = 0
let rely = 0

const scale = 110
const scalex = 16
const scaley = 10


canvas.width = scale * scalex // 1024
canvas.height = scale * scaley // 576

var falling = 0
var dashcooldown = 0


let maxenergy = 400
let energy = maxenergy

let maxhealth = 100
let health = maxhealth




/*const pipe = new Sprite({
    position:{
        x: 0,
        y: 0
    },
    imagesrc: './img/metal pipe.jpg'
})*/

let collisions = []
new Collision(700, 600, 400, 100)
const player = new Player() 

const keys = {
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
    shift:{
        pressed: false
    }
}


function animate() {
    if(health > 1) window.requestAnimationFrame(animate)
    dashcooldown--;
    c.fillStyle = 'rgb(19, 0, 20)'
    c.fillRect(0,0, canvas.width, canvas.height)
    

    player.velocity.x *= 0.85
    if(keys.d.pressed) player.velocity.x += 2.5
    if(keys.a.pressed) player.velocity.x += -2.5
    if(keys.w.pressed && falling != 3){
        // normal jump
        if(falling == 0){
            player.velocity.y = -20
            falling = 1
        }
        // doublejump
        else if(falling == 2){
            if(player.velocity.y <= -10 && energy >= 8){player.velocity.y = -23; console.log("Strafejump done"); energy-=8}
            else if(player.velocity.y >= -10 && energy >= 9){player.velocity.y = -17; console.log("Double jump done"); energy-=9}
            falling = 3
        }

    }
    else if(!keys.w.pressed && falling == 1){
        falling = 2
    }
    if(keys.shift.pressed && dashcooldown < 1 && player.velocity.x != 0 && energy >= 10){
        energy -= 10;
        player.velocity.x = 80 * (player.velocity.x / Math.abs(player.velocity.x))
        dashcooldown = 30
        console.log("Dash done")

    }
    player.draw()
    player.update()

    collisions.forEach(index =>{
        index.draw()

    if(energy > maxenergy){
        health +=( energy - maxenergy) / 5
        energy = maxenergy
    }

    if(health > maxhealth){
        health = maxhealth
    }
    
}

)
    updatebars()
    updatehand()

    updatebuildmenu()


    


}
animate()

window.setInterval(tick, 1000)

function tick(){
    if(health > 1)
        if(energy > 0)energy--;
        else{
            health-=5;
        }
}
