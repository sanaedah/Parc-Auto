class Voiture{
    constructor(imm, color){
        this.imm = imm;
        this.boardMessage = '';
        this.ass= false;
        this.color = color
    }

    toMoove(){
        return `j'avance de 5km...`
        function sum(){
        }
    }

    set takeAsurrance(value){
        this.ass = value;
        this.boardMessage = 'Vous êtes dorénavant assurés'
    }

    get infoAssurance(){
        return this.imm ? 'Vous avez une assurance valide' : 'Vous n\'avez pas le droit de conduire'; //Ternary operator
    }

    set toPaint(color){
        this.color = color;
    }


}

const mercedes = new Voiture('AF-34-FG', 'orange')
console.log(mercedes)
mercedes.takeAsurrance = true;
mercedes.toPaint = 'green'
console.log(mercedes)
console.log(mercedes.infoAsszurance);

console.log(mercedes.imm)
console.log(mercedes.boardMessage)

// const volkswagen = new Voiture('AF-35-FG');
// console.log(volkswagen)

// console.log(volkswagen)