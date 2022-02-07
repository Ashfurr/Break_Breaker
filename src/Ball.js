class Ball {
    constructor(Tableau1) {
        this.lock=0
        this.state=0
        this.scene = Tableau1
        this.ballC = this.scene.physics.add.sprite(gameConfig.width / 2, 780, 'ball').setBounce(1,1)
        console.log(this.ballC.width,this.ballC.height)
    }

    Reset() {
        this.ballC.x = gameConfig.width / 2;
        this.ballC.y = 780;
        this.ballC.setVelocityX(0);
        this.state=0
        this.ballC.setVelocityY(0);
        this.lock=0
    }

    Gauche() {
        if(this.state==0) {
            this.ballC.setVelocityX(-800);
            console.log('gauche')
        }
    }

    Droite() {
        if(this.state==0) {
            this.ballC.setVelocityX(800);
            console.log('droite ')
        }
    }
    pasbouger(){
        if(this.state==0) {
            this.ballC.setVelocityX(0)
        }
    }
    launch(){
        if(this.lock==0){
        this.state=1;
        this.lock=1;
        this.ballC.setVelocityY(-500)
            console.log('launch')
        }


    }
}
