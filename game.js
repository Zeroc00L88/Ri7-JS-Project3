// Prompt
const prompt_fn = require('prompt-sync');
const prompt = prompt_fn();

// Create prototype fonction for player that would apply to player as well as computer
function Player(name, pv){
    // Each attack passed in an object
    const atkOne = {
        name: "Frappe Rapide",
        power: -10,
        accuracy: 1/2,
    }

    const atkTwo = {
        name: "Soin Léger", 
        power: 15,
        accuracy: 1/3,
    }

    const atkThree = {
        name: "Coup Puissant", 
        power: -20,
        accuracy: 1/3,
    }
    const atkFour = {
        name: "Frappe Devastatrice",
        power: -30,
        accuracy: 1/4,
    }
    // Atributes
    this.name = name;
    this.pv = pv;
    // Damage setter
    this.damage = (power) => {
        this.pv += power;
    }
    // Getter methods
    this.getName = () => {
        return this.name;
    }
    this.getPv = () => {
        return this.pv;
    }
    // Attack method flor player, that include prompting 
    this.attack = () => {
        console.log("\nC'est votre tour d'attaquer, veuillez choisir une attaque :\n\n1.", atkOne.name,": Puissance 10pv, Précision 50%.\n2.", atkTwo.name,": Soigne 15pv, Précision 50%.\n3.", atkThree.name,": Puissance 20pv, Précision 33,33%.\n4.", atkFour.name,": Puissance 30pv, Précision 25%.\n")
        let choosenAtk = parseInt(prompt("Entrez le numéro de votre attaque : "))
        console.log("\n")
        while(choosenAtk != 1 && choosenAtk != 2 && choosenAtk != 3 && choosenAtk != 4){
            choosenAtk = parseInt(prompt("Veuillez entrer un attaque valide : "))
        }
        let chance = Math.random();
        switch (choosenAtk) {
            case 1:
                if(chance < atkOne.accuracy){
                    console.log(this.name,"attaque ! et inflige", atkOne.power, "pv")
                    return atkOne.power;
                } else {
                    console.log(this.name, "loupe son attaque !")
                    return 0;
                }
            case 2:
                if (chance < atkTwo.accuracy) {
                    this.pv += atkTwo.power;
                    console.log(this.name, "reprends de la vie : +", atkTwo.power, "pv !")
                    return 0;
                } else {
                    console.log(this.name, "loupe son soins !")
                    return 0;
                }
            case 3:
                if (chance < atkThree.accuracy) {
                    console.log(this.name, "attaque ! et inflige", atkThree.power, "pv")
                    return atkThree.power;
                } else {
                    console.log(this.name, "loupe son attaque !")
                    return 0;
                }
            case 4:
                if (chance < atkFour.accuracy) {
                    console.log(this.name, "attaque ! et inflige", atkFour.power, "pv")
                    return atkFour.power;
                } else {
                    console.log(this.name, "loupe son attaque !")
                    return 0;
                }
            default:
                break;
        }
    }
    // Attack method for computer, that choose an attack randomly
    this.randomAttack = () => {
        let chance = Math.random();
        randomChoice = Math.floor(Math.random() * (5 - 1)) + 1
        switch (randomChoice) {
            case 1:
                if(chance < atkOne.accuracy){
                    console.log(this.name,"attaque ! et inflige", atkOne.power, "pv")
                    return atkOne.power;
                } else {
                    console.log(this.name, "loupe son attaque !")
                    return 0;
                }
            case 2:
                if (chance < atkTwo.accuracy) {
                    this.pv += atkTwo.power;
                    console.log(this.name, "reprends de la vie : +", atkTwo.power, "pv")
                    return 0;
                } else {
                    console.log(this.name, "loupe son soins !")
                    return 0;
                }
            case 3:
                if (chance < atkThree.accuracy) {
                    console.log(this.name, "attaque ! et inflige", atkThree.power, "pv")
                    return atkThree.power;
                } else {
                    console.log(this.name, "loupe son attaque !")
                    return 0;
                }
            case 4:
                if (chance < atkFour.accuracy) {
                    console.log(this.name, "attaque ! et inflige", atkFour.power, "pv")
                    return atkFour.power;
                } else {
                    console.log(this.name, "loupe son attaque !")
                    return 0;
                }
            default:
                break;
        }
    }
}

// Player create
const playerName = prompt("Création du joueur, entrez votre nom : ")
let pv = parseInt(prompt("Entrez le nombre de point de vie des joueurs de la parties : "))

let player = new Player(playerName, pv);
let computer = new Player("Ordinateur", pv);

// Game Loop
while(player.getPv() > 0 && computer.getPv() > 0) {

    // Player attack
    computer.damage(player.attack());
    if (computer.getPv() <= 0) {
        console.log("\n*****",computer.getName(), "est mort !*****\n");
        break
    }
    console.log("Il vous reste:", player.getPv(), "pv");
    console.log("Il reste à l'ordinateur:",computer.getPv(),"pv\n");

    // Computer attack
    player.damage(computer.randomAttack());
    if (player.getPv() <= 0) {
        console.log("\n*****",player.getName(), "est mort !*****\n");
        break
    }
    console.log("Il vous reste:", player.getPv(), "pv");
    console.log("Il reste à l'ordinateur:",computer.getPv(),"pv\n\n----------------------------------------------------------");
}

console.log("FIN DU JEU")
