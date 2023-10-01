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
  
    attackPokemon(pokemon) {
      if (this.isLucky()) {
        const damage = this.attack - pokemon.defense;
        if (damage > 0) {
          pokemon.hp -= damage;
        }
        console.log(`${this.name} attaque ${pokemon.name} et inflige ${damage} dégâts.`);
        console.log(`${pokemon.name} a maintenant ${pokemon.hp} points de vie.`);
        if (pokemon.hp <= 0) {
          console.log(`${pokemon.name} est mort.`);
        }
      } else {
        console.log(`${this.name} rate son attaque contre ${pokemon.name}.`);
      }
    }
  }
  
  let Salamech = new Pokemon("Salamech", 80, 0.7, 20, 600);
  let Pickachu = new Pokemon("Pickachu", 90, 0.6, 35, 480);
  
  while (Salamech.hp >= 0 && Pickachu.hp >= 0) {
    Salamech.attackPokemon(Pickachu);
    if (Pickachu.hp > 0) {
      Pickachu.attackPokemon(Salamech);
    }
  }
  
  console.log("Le combat est fini.");
  