class Sprite {
    constructor({position, imagesrc}){
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded=true
        }
        this.image.src = imagesrc
        this.loaded = false
    }
    draw(){
        if (!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}





class Collision{
    constructor(x,y,width,height, type="block"){
        this.position = {
            x: x,
            y: y
        }
        this.data = {
            width: width,
            height: height
        }

        if(width < 0){
            this.position.x += this.data.width
            this.data.width = Math.abs(this.data.width)
        }
        if(height < 0){
            this.position.y += this.data.height
            this.data.height = Math.abs(this.data.height)
        }
        this.type = type
    collisions.push(this)
}
    draw(){
        switch(true){
            case(this.type=="build"):
            c.fillStyle = '#00de98'
            break
            case(this.type=="block"):
            c.fillStyle = 'rgb(82, 0, 86)'
            break
            case(this.type=="hazard"):
            c.fillStyle = 'rgb(255, 0, 0)'
            break
            case(this.type=="replenisher"):
            c.fillStyle = 'rgb(255, 255, 0)'
            break
            

        }
        c.fillRect(this.position.x + relx, this.position.y + rely, this.data.width, this.data.height);
    }

}