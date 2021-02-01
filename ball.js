class Ball {

    constructor(x, y, r){

        var options = {
            restitution : 0.6,
            friction : 0.2,
            density : 1
        }

        this.r = 50
        
        
        this.image = loadImage("Superhero-01.png")

        this.body = Bodies.circle(x, y, 50, options)

        World.add(world, this.body)
        


    }

    display(){

        push()
        translate(this.body.position.x, this.body.position.y)
        
        imageMode(CENTER)
        image(this.image, 0, 0, this.r * 6, this.r * 3)
        pop()

    }



}