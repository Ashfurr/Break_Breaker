class Bricks {
    constructor(Tableaux1){
        this.scene=Tableaux1
        let me = this
        this.brique = this.scene.physics.add.staticGroup({
            key: 'brickr',
            repeat: 11,
            setXY: { x: 130, y: 100, stepX: 135,},
        })
        this.brique.createMultiple({
            key: 'brickp',
            repeat: 11,
            setXY: { x: 130, y: 175, stepX: 135},
        })
        this.brique.createMultiple({
            key: 'brickg',
            repeat: 11,
            setXY: { x: 130, y: 250, stepX: 135},
        })
        this.brique.createMultiple({
            key: 'bricko',
            repeat: 11,
            setXY: { x: 130, y: 325, stepX: 135},
        })
        this.scene.physics.add.collider(this.scene.ballT.ballC,this.brique,this.destroyBricks,null,this)
    }

    destroyBricks(ball,briques)
    {
        briques.destroy()
    }
}