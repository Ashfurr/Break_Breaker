let gameConfig = {
    type: Phaser.AUTO,
    width: 1728,
    height: 972,
    scale: {
        mode: Phaser.Scale.FIT,
        min: {
            width: 600,
            height: 800
        },
        max: {
            width: 720,
            height: 900,
        }
    },
    backgroundColor: '#000000',
    audio: {
        disableWebAudio: true
    },
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            debug:false
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);
