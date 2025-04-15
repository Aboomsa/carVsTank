window.addEventListener('keydown',  (event) => {

    switch(event.key.toLowerCase()){
        case 'w':
            keys.w.pressed = true

        break

        case 'a':
            keys.a.pressed = true
            
        break

        case 'd':
            keys.d.pressed = true

        break

        case 'shift':
            keys.shift.pressed = true
        break
    }
})

window.addEventListener('keyup',  (event) => {
    switch(event.key.toLowerCase()){
        case 'w':
            keys.w.pressed = false

        break
        case 'a':
            keys.a.pressed = false
            
        break
        
        case 'd':
            keys.d.pressed = false

        break

        case 'shift':
            keys.shift.pressed = false
    }
})
window.addEventListener("mousemove", function(mouse){
    amouse = {
        x: mouse.clientX,
        y: mouse.clientY,
    }
    
    
    //console.log(Math.atan(100, 900), mouse.clientX, hand.x, mouse.clientY, hand.y)
    //console.log(90 - Math.atan(((hand.style.y - mouse.clientY)/(hand.style.x - mouse.clientX))), mouse.clientX, hand.x)
    //hand.style.rotate = Math.sin(90 - ((mouse.clientY - hand.style.y)/(mouse.clientX - hand.style.x))) * 360 + "deg"

    //if(mouse.clientX > hand.style.left){hand.style.rotate = Math.sin(90 - ((mouse.clientY - hand.style.y)/(mouse.clientX - hand.style.x))) * 360 + "deg"}
    //else{hand.style.rotate = -90 - Math.sin((mouse.clientY - hand.style.y)/(mouse.clientX - hand.style.x)) * 360 + "deg"}
})