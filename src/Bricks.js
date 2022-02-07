class Bricks {
    constructor(Tableaux1){
        this.scene=Tableaux1
        let me = this
        this.brique = this.scene.physics.add.staticGroup()
        for(let i=1;i<=3;i++) {
            this.brique.createMultiple({
                key: 'bricks',
                repeat: 8,
                setXY: {x: 160, y: 100+i*30, stepX: 60},
            })
        }

        this.brique.createMultiple({
                key: 'bricks',
                repeat: 3,
                setXY: {x: 160, y: 220, stepX: 60},
            })
        this.brique.create(400,220,'bricks').setTintFill(0x00FF00)
        this.brique.create(460,220,'bricks').setTintFill(0xFF0000)
        this.brique.createMultiple({
            key: 'bricks',
            repeat: 2,
            setXY: {x: 520, y: 220, stepX: 60},
        })
        this.brique.createMultiple({
            key: 'bricks',
            repeat: 8,
            setXY: {x: 160, y: 250, stepX: 60},
        })
//160 x car 9 brique*60 = 540 800-540=260/2=130+60/2=160 c'est pour centrer
        console.log(this.brique.getChildren([42]))
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