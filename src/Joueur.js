class Joueur {
    constructor(Tableau1){
        this.Tablo= Tableau1

        this.player=this.Tablo.physics.add.sprite(650,850,'pad')
        this.player.setDisplaySize(400,20)
        this.player.setImmovable(true)
        this.player.setVelocityX(0)
        this.Tablo.physics.add.collider(this.player,this.Tablo.ballT.ballC)
    }
    gauche(){
        this.player.setVelocityX(-500)
    }
    droite(){
        this.player.setVelocityX(500)
    }
    pasbouger(){
        this.player.setVelocityX(0)
    }
    bord(){
        if(this.player.x<=190){
            this.player.x=190
        }
        if(this.player.x>=1527){
            this.player.x=1527
        }
  }
}