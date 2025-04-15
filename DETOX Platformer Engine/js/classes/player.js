class Player{
    constructor(){
        this.position = {
            x: canvas.width / 2,
            y: canvas.height / 2,
        }

        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 100;
        this.height = 100;

        this.sides = {
        bottom: this.position.y + this.height
    }
    this.gravity = 0.8
    }

    draw(){
        c.fillStyle = 'rgb(82, 0, 86)'
        c.fillRect(this.position.x + relx, this.position.y + rely, this.width, this.height);
    }

    update(){
        this.position.x+= this.velocity.x;
        this.checkforx()
        if(dashcooldown < 20){
        this.velocity.y += this.gravity
        this.position.y+=this.velocity.y;
        this.sides.bottom = this.position.y + this.height;
        falling == 0? falling = 1 : null}
        else{
            this.velocity.y = 0
        }
        this.checkfory()
        relx = 0 -this.position.x + canvas.width / 2 - this.width / 2
        rely = 0 - this.position.y + canvas.height / 2 - this.height / 2

    }



    checkforx(){
        for (let i = 0; i < collisions.length; i++){

            const collisionblock = collisions[i]
            if(
                this.position.x <= collisionblock.position.x + collisionblock.data.width &&
                this.position.x + this.width >= collisionblock.position.x &&
                this.position.y + this.height >= collisionblock.position.y &&
                this.position.y <= collisionblock.position.y + collisionblock.data.height
            ){
                this.checkforblocktype(collisionblock)

                if (this.velocity.x < 0){
                    this.position.x = collisionblock.position.x + collisionblock.data.width + 0.01
                    break
                }
                if (this.velocity.x > 0){
                    this.position.x = collisionblock.position.x - this.width - 0.01
                    break
                }
            }
        }
    }
    checkfory(){for (let i = 0; i < collisions.length; i++){

        const collisionblock = collisions[i]
        if(this.position.x <= collisionblock.position.x + collisionblock.data.width &&
            this.position.x + this.width >= collisionblock.position.x &&
            this.position.y + this.height >= collisionblock.position.y &&
            this.position.y <= collisionblock.position.y + collisionblock.data.height
        ){
            this.checkforblocktype(collisionblock)
            this.velocity.x *= 0.9


            if (this.velocity.y < 0){
                this.velocity.y = 0
                this.position.y = collisionblock.position.y + collisionblock.data.height + 0.01

                break
            }
            if (this.velocity.y > 0){
                this.velocity.y = 0
                falling = 0;
                this.position.y = collisionblock.position.y - this.height - 0.01

                break
            }
        }
    }}

    checkforblocktype(a){
        if(a.type == "replenisher"){
            energy+=2;
        }
        if(a.type == "hazard"){health-=15}
    }
        
}

class Hand{
    constructor(){
        this.direction = 90
    }

    draw(){
        c.fillStyle = 'rgb(82, 0, 86)'
        c.fillRect(this.position.x + relx, this.position.y + rely, this.width, this.height);
        
    }
}