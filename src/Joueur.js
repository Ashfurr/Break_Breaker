class Joueur {
    get vie() {
        return this._vie;
    }

    set vie(value) {
        this._vie = value;
        this.$vie.textContent=  this.vie
    }
    get score() {
        return this._score;
    }

    set score(value) {
        this._score = value;
        this.$score.textContent=  this._score
    }

    constructor(Tableau1,scoreId){
        let me = this
        this.scene= Tableau1

        this._score = 0;
        this._vie=3;
        this.name = name;
        this.htmlID = scoreId;


        this.$el = document.getElementById(scoreId);
        this.$score = this.$el.querySelector(".score")
        this.$vie = this.$el.querySelector(".vie")

        this.player=this.scene.physics.add.sprite(gameConfig.width/2,700,'pad').setTintFill(0xFFFFFF)
        this.player.setDisplaySize(200,20)
        this.player.setImmovable(true)
        this.player.setVelocityX(0)
        this.scene.physics.add.collider(this.player,this.scene.ballT.ballC,function () {
            me.renvoie(me.player)
        })
    }
    renvoie(player){
        this.rando=this.scene.ballT.ballC.x-player.x
        this.coeff=this.rando/10
        this.coeff=this.coeff*1.5
        this.scene.ballT.ballC.setVelocityX(this.scene.ballT.ballC.body.velocity.x+this.coeff*5)
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
        if(this.player.x<=30){
            this.player.x=30
        }
        if(this.player.x>=670){
            this.player.x=670
        }
  }
  Reset(){
        this.player.x=gameConfig.width/2;
        this.player.y=700;

  }

}