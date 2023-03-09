export default class Pokemon {
    id: number;
    name: string;
    image?: string;
    height?: number;
    weight?: number;
    type?: string;
    move?: string;
    stats?: Stats;
    
constructor (
    id: number,
    name: string,
    image?: string,
    height?: number,
    weight?: number,
    type?: string,
    move?: string,
    stats?: Stats,
) {
    this.id = number;
    this.name = string;
    this.image = string;
    this.height = number;
    this.weight = number;
    this.type = string;
    this.move = string
    this.stats = Stats;
    }
}

export class Stats {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;

    constructor (
        hp: number,
        attack: number,
        defense: number,
        specialAttack: number,
        specialDefense: number,
        speed: number,
    ) {
        this.hp = number;
        this.attack = number;
        this.defense = number;
        this.specialAttack = number;
        this.specialDefense = number;
        this.speed = number;
    }
}