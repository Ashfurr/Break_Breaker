class Joueur {
    get score() {
        return this._score;
    }

    set score(value) {
        this._score = value;
        this.$score.textContent=  this._score
    }

    constructor(Tableau1,name,scoreID){
        let me = this
        this.Tablo= Tableau1

        this._score = 0;
        this.name = name;
        this.scoreId = scoreID;


        this.player=this.Tablo.physics.add.sprite(650,850,'pad')
        this.player.setDisplaySize(400,20)
        this.player.setImmovable(true)
        this.player.setVelocityX(0)
        this.Tablo.physics.add.collider(this.player,this.Tablo.ballT.ballC,function () {
            me.renvoie(me.player)
        })
    }
    renvoie(player){
        this.rando=this.Tablo.ballT.ballC.x
        this.coeff=this.rando/10
        this.coeff=this.coeff*1.5
        this.Tablo.ballT.ballC.setVelocityX(this.Tablo.ballT.ballC.body.velocity.x+this.coeff*5)
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