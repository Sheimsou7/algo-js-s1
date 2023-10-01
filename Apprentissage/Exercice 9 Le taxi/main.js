

let playlist = ["Wejden", "Booba", "Kaaris", "Jul", "Pnl"]


class Personnage {
    constructor(names, Pv) {
        this.Pv = Pv;
        this.names = names;
    }



    trajet(playlist){
        var NombreChangementTaxis = 0
        var NombreFeuRouge = 0
    while (NombreChangementTaxis < 25 && this.Pv > 0 ){
        NombreChangementTaxis ++,
        console.log("C'est le tour de taxi numero ", NombreChangementTaxis,) 
        let random = playlist[Math.floor(Math.random() * playlist.length)];
        console.log("la musique de ", random ,"est passer");
    if (random === "Wejden"){ 
       this.Pv -= 1
    console.log (" Goku a écouter du Wejden il perd un poins de vie")

   }
   if (this.Pv === 0 ){ 
    console.log ("goku est mort")
    break
   }
  }       
 }
}

let Goku = new Personnage("Goku", 4)

Goku.trajet(playlist) 


console.log ("le trajet est finit")
