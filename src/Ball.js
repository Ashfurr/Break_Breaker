class Ball {
    constructor(Tableau1){
    this.scene=Tableau1
        this.ballC=this.scene.physics.add.sprite(gameConfig.width/2,550,'pad').setDisplaySize(20, 20).setVelocity(500,-250).setBounce(1,1);
    }
}