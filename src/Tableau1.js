

class Tableau1 extends Phaser.Scene {


    preload(){
        this.load.image('pad','assets/carre.png')
    }
    create(){
        this.player=new Joueur(this);
        this.wall=new Walls(this);

    }
    update(){
    }
}
