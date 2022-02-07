class Bricks {
    constructor(Tableaux1){
        this.scene=Tableaux1
        let me = this
        this.brique = this.scene.physics.add.staticGroup({
            key: 'brickr',
            repeat: 4,
            setXY: { x: 90, y: 100, stepX: 135,},
        })
        this.brique.createMultiple({
            key: 'brickp',
            repeat: 4,
            setXY: { x: 90, y: 175, stepX: 135},
        })
        this.brique.createMultiple({
            key: 'brickg',
            repeat: 4,
            setXY: { x: 90, y: 250, stepX: 135},
        })
        this.brique.createMultiple({
            key: 'bricko',
            repeat: 4,
            setXY: { x: 90, y: 325, stepX: 135},
        })
        this.scene.physics.add.collider(this.scene.ballT.ballC,this.brique,this.destroyBricks,null,this)
    }

    destroyBricks(ball,briques)
    {
        this.renvoie(briques)
        briques.destroy()
    }
    renvoie(briques){
        console.log(briques.x)
        this.rando=this.scene.ballT.ballC.x-briques.x
        this.coeff=this.rando/10
        this.coeff=this.coeff*1.5
        this.scene.ballT.ballC.setVelocityX(this.scene.ballT.ballC.body.velocity.x+this.coeff*5)
    }
}