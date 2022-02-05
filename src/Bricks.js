class Bricks {
    constructor(Tableaux1){
        this.scene=Tableaux1
        let me = this
        this.brique = this.scene.physics.add.staticGroup({
            key: 'brick',
            repeat: 2,
            setXY: { x: 160, y: 100, stepX: 450,},
        }).setOrigin(0.0);
        this.brique.createMultiple({
            key: 'brick',
            repeat: 4,
            setXY: { x: 160, y: 300, stepX: 450,},
        })
        this.scene.physics.add.collider(this.scene.ballT.ballC,this.brique, function(){
            me.destroyBricks(me.scene.ballT.ballC,me.brique)
        )};
    }

    destroyBricks(ball, briques)
    {
        console.log('oui ')
        briques.destroy
    }
}