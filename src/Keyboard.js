class Keyboard {
    constructor(Tableau1) {
        this.scene = Tableau1
        //c'est parti !
        this._ecouteClavier();
    }

    /**
     * Méthode pour commencer à écouter le clavier
     * @private
     */
    _ecouteClavier() {
        let me=this
        //quand on appuie sur une touche du clavier
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
            }
            if (event.key === "s") {
                ;
            }
            if (event.key === "x") {
               ;
            }
            if (event.key === "j") {
                ;
            }
            if (event.key === "n") {
               ;
            }
            event.preventDefault(); // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
        }, true);
        window.addEventListener("keyup", function (event) {
            if (event.defaultPrevented) {
                return; // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
            }
            if (event.key === "s") {
                ;
            }
            if (event.key === "x") {
                ;
            }
            if (event.key === "j") {
                ;
            }
            if (event.key === "n") {
                ;
            }
            if (event.key === "r") {
                ;
            }
            if (event.code==='Space') {
            }
            event.preventDefault(); // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
        }, true);


    }
}