class Pokemon {
    constructor(name, attack, luck, defense, hp) {
      this.name = name;
      this.attack = attack;
      this.luck = luck;
      this.defense = defense;
      this.hp = hp;
    }
  
    isLucky() {
      return Math.random() < this.luck;
    }
  
    attackPokemon(target) {
      if (this.isLucky()) {
        const damage = this.attack - target.defense;
        if (damage > 0) {
          target.hp -= damage;
        }
        console.log(`${this.name} attaque ${target.name} et inflige ${damage} dégâts.`);
        console.log(`${target.name} a maintenant ${target.hp} points de vie.`);
        if (target.hp <= 0) {
          console.log(`${target.name} est mort.`);
        }
      } else {
        console.log(`${this.name} rate son attaque contre ${target.name}.`);
      }
    }
  }
  
  let Salamech = new Pokemon("Salamech", 80, 0.7, 20, 600);
  let Pickachu = new Pokemon("Pickachu", 90, 0.6, 35, 480);
  
  while (Salamech.hp > 0 && Pickachu.hp > 0) {
    Salamech.attackPokemon(Pickachu);
    if (Pickachu.hp > 0) {
      Pickachu.attackPokemon(Salamech);
    }
  }
  
  console.log("Le combat est fini.");
  