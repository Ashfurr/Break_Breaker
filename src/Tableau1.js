

class Tableau1 extends Phaser.Scene {


    preload(){
        this.load.image('pad','assets/carre.png')
        this.load.image('brick','assets/bricks.png')
    }
    create(){
        this.detect=0
        this.ballT=new Ball(this);
        this.player=new Joueur(this);
        this.wall=new Walls(this);
        this.keyboard=new Keyboard(this);

    }

    renvoie(player){
        this.rando=this.ballT.ballC.x
        this.coeff=this.rando/10
        this.coeff=this.coeff*1.5
        this.ballT.ballC.setVelocityX(this.ballT.ballC.body.velocity.x+this.coeff*5)
    }

    update(){
        this.player.bord()
    }
}
