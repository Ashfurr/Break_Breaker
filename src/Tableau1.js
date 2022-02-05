

class Tableau1 extends Phaser.Scene {

    preload(){
        this.load.image('pad','assets/carre.png')
        this.load.image('brick','assets/barreRED.png')
    }
    create(){
        this.detect=0
        this.ballT=new Ball(this);
        this.player=new Joueur(this);
        this.wall=new Walls(this);
        this.keyboard=new Keyboard(this);
        this.brick=new Bricks(this);
    }

    update(){
        this.player.bord()
    }
    win(Joueur){
        this.player.score ++;
    }
}
