class Joueur {
    constructor(Tableau1){
        this.Tablo= Tableau1

        this.player=this.Tablo.physics.add.sprite(650,850,'pad')
        this.player.setDisplaySize(400,20)
        this.player.setVelocityX(0)
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
}