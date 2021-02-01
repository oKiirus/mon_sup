class Monster {

    constructor(x, y){

        var options = {
            isStatic : true
        }

        this.width = 100
        this.height = 100
        
        this.image = loadImage("Monster-01.png")

        this.body = Bodies.rectangle(x, y, 100, 100, options)

        World.add(world, this.body)
        


    }

    display(){

        push()
        translate(this.body.position.x, this.body.position.y)
        
        imageMode(CENTER)
        image(this.image, 0, 0, 200, 200)
        pop()

    }



}

//https://okiirus.github.io/Rainbow_Mouse/