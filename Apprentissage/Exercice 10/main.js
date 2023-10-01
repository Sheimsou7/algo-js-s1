class Personnage {
    constructor(nom, caractéristique, probaMourir, probaInfliger, probaMourirEnInfligeant) {
      this.nom = nom;
      this.caractéristique = caractéristique;
      this.probaMourir = probaMourir;
      this.probaInfligerDommages = probaInfliger;
      this.probaMourirEnInfligeant = probaMourirEnInfligeant;
      this.pointsDeVie = 100;
     }
    }
    
    attaquer() {
        const actions = [
          { action: "Jason a tué", proba: this.probaMourir }
          { action: this.nom," a esquivé et infligé 10 points de dégâts à Jason.", proba: this.probaInfligerDommages },
          { action: this.nom,"n'a rien fait." , proba: 1 - this.probaMourir - this.probaInfligerDommages - this.probaMourirEnInfligeant }
        ];

        console.log(actionChoisie.action);
    
        if (actionChoisie.action.startsWith("Jason a tué")) {
          return "mort";
        } else if (actionChoisie.action.startsWith(this.nom, "inflige")) {
          return "mort";
        } else {
          return 0;
        }
      }
    }
    
    const prénoms = ["Nerd", "Sportif", "Blonde", "Héroïque", "Craintif"];
    const survivants = prénoms.map(prénom => new Personnage(prénom, prénom, Math.random(), Math.random(), Math.random()));
    
    let jason = new Personnage("Jason", "Tueur", 0.5, 0.2, 0.3);
    
    while (jason.pointsDeVie > 0 && survivants.length > 0) {
      const survivantAttaqué = survivants[Math.floor(Math.random() * survivants.length)];
      const dégâtsInfligés = survivantAttaqué.attaquer();
      
      if (dégâtsInfligés === "mort") {
        survivants.splice(survivants.indexOf(survivantAttaqué), 1);
      } else {
        jason.pointsDeVie -= dégâtsInfligés;
      }
    }
    
    if (jason.pointsDeVie <= 0) {
      console.log("Jason est mort. Les survivants ont gagné.");
    } else {
      console.log("Les survivants ont perdu. RIP à :", survivants.map(s => s.nom).join);
    }
    
    
    
    
    /* j'ai pas reussi a finr celuis-ci mai je pense que je suis pas loin