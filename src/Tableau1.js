

class Tableau1 extends Phaser.Scene {


    preload(){
        this.load.image('pad','assets/carre.png')
        this.load.image('brick','assets/bricks.png')
    }
    create(){
        this.ballT=new Ball(this);
        this.player=new Joueur(this);
        this.wall=new Walls(this);
        this.keyboard=new Keyboard(this);

    }
    update(){
        this.player.bord()
    }
}
