//mainstatcontainer

const hpbar = document.getElementById("healthbar")
const ebar = document.getElementById("energybar")
const h = hpbar.getContext("2d")
const e = ebar.getContext("2d")

const hpcounter = document.getElementById("healthcounter")
const ecounter = document.getElementById("energycounter")


const hand = document.getElementById("playerhand")


function updatebars(){
h.fillStyle = "rgb(52, 0, 0)"
h.fillRect(0,0,300,150)
e.fillStyle = "rgb(52, 49, 0)"
e.fillRect(0,0,300,150)

h.fillStyle = "rgb(255, 0, 0)"
h.fillRect(0,0,(health/maxhealth) * 300,150)


e.fillStyle = "rgb(255, 242, 0)"
e.fillRect(0,0,(energy/maxenergy) * 300,150)


hpcounter.innerText = `${Math.round(health)}/${Math.round(maxhealth)}`
ecounter.innerText = `${Math.round(energy)}u`


}






function updatehand(){
    var handx = canvas.width / 2;
    var handy = canvas.height / 2;
    hand.style.left = handx + "px"
    hand.style.top = handy + "px"

    let angle = (Math.atan2(handy - amouse.y, handx - amouse.x) / Math.PI * 180) + 270;
    let distancetomouse = Math.sqrt(((handx - amouse.x)** 2 )+( (handy - amouse.y) ** 2))
    if(distancetomouse > 200) distancetomouse = 200
    else if(distancetomouse < 125) distancetomouse = 125

    console.log()
    hand.style.position = "absolute"
    hand.style.rotate = (angle) + "deg"

    var tempx = handx - 12.5
    var tempy = handy - 12.5
    hand.style.left = tempx +((distancetomouse / 2)*Math.sin(Math.PI * angle / 180)) + "px"
    hand.style.top = tempy +((distancetomouse / 2)*-Math.cos(Math.PI * angle / 180)) + "px"
    let tempcostume = 1
    if(180 >= angle || angle >= 360){tempcostume = 2}
    console.log(angle, tempcostume)


    switch(true){

        case(weapon == "hand"):
        hand.src = "img/player/emptyhand.svg"
        break

        case(weapon == "gun"):
        hand.src = `img/player/gunhand${tempcostume}.svg`
        break

    }



    
}