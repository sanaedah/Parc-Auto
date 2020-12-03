class Voiture{
    constructor(registrationNumber, color, weight, powerFiscal, tankCapacity, fuelLevel, numberOfPlaces, insurrancee, msgDashboard){
        this.registrationNumber = registrationNumber
        this.color = color
        this.weight = weight
        this.powerFiscal = powerFiscal
        this.tankCapacity = tankCapacity
        this.fuelLevel = fuelLevel
        this.numberOfPlaces = numberOfPlaces
        this.insurrancee = insurrancee
        this.msgDashboard = msgDashboard   
    }
    delivery(value){
        if(!value){
            this.insurrancee = value
            this.fuelLevel = 5
            this.msgDashboard = "vous n'êtes pas assurés "
            return this.msgDashboard;
        }
        else {
            this.insurrancee = value
            this.msgDashboard = "vous êtes assurés !"
            return this.msgDashboard;
        }
    }
    pint(Nouvellecolor) {   
        if (this.color === Nouvellecolor){
            return "Merci pour ce rafrichissement!!";
        }else{
            this.color = Nouvellecolor;
            return `la nouvelle couleur est : ${Nouvellecolor}, merci pour cette nouvelle couleur!`;
        }
    } 
    getFuel( quantity) {
        quantity = this.tankCapacity - this.fuelLevel
        if(this.fuelLevel < this.tankCapacity){
            return `on peut rajouter  jusqu'à ${quantity} litres de Carburant`;
        }else{
            return `votre reservoir est plein ! `;
        }
    }
    toMove(distance, averageSpeed, consumption) {
        if(averageSpeed<50 ){
            consumption = distance * 0.1
            return consumption;
        }
        if(averageSpeed < 90 && averageSpeed > 50){
            consumption = distance * 0.05
            return consumption;
        }
        if(averageSpeed <130  && averageSpeed > 90){
            consumption = distance * 0.08
            return consumption;
        }
        if(averageSpeed > 130 ){
            consumption = distance * 0.08
            return consumption;
        }
        if(this.fuelLevel >= this.consumption){
            return `vous allez consommer ${consumption} litres pour faire ce trajet.`;
        }else{
            return `il vous reste ${this.fuelLevel} litres de carburant  et le trajet nécessite ${this.consumption} litres, vous ne pouvez pas effectuer ce trajet  vous n'avez pas assez de carburant`;
        }
    }
    toString(){
        return `Le numéro d'immatriculation est : ${this.registrationNumber} , la puissance fiscale est : ${this.powerFiscal} et sa couleur est ${this.color}`;
    }
}
let Mavoiture = new Voiture("12 slk 56", "Rouge", 1500, 150, 60, 20, 5)
/*console.log(Mavoiture.toString());
Mavoiture.delivery(false);
console.log(Mavoiture.delivery());
Mavoiture.pint("gris");
Mavoiture.getFuel();*/
console.log(Mavoiture.toMove(60, 90));


   
   


