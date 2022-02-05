class Joueur {
    constructor(Tableau1){
        let me = this
        this.Tablo= Tableau1

        this.player=this.Tablo.physics.add.sprite(650,850,'pad')
        this.player.setDisplaySize(400,20)
        this.player.setImmovable(true)
        this.player.setVelocityX(0)
        this.Tablo.physics.add.collider(this.player,this.Tablo.ballT.ballC,function () {
            me.Tablo.renvoie(me.player)
        })
    }
    gauche(){
        this.player.setVelocityX(-800)
    }
    droite(){
        this.player.setVelocityX(800)
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