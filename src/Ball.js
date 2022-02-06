class Ball {
    constructor(Tableau1){
    this.scene=Tableau1
        this.ballC=this.scene.physics.add.sprite(gameConfig.width/2,550,'pad').setDisplaySize(20, 20).setVelocityY(500).setBounce(1,1);
    }
Reset(){
  this.ballC.x=gameConfig.width/2
  this.ballC.y=550
  this.ballC.setVelocityX(0)
  this.ballC.setVelocityY(500)
  }
}
