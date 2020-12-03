class Voiture{
    constructor(immatriculation, couleur, poid, puissance, capaciteReservoir, niveauDeCarburant, nombreDePlace, assure, msgTableaudeBord){
        this.immatriculation = immatriculation
        this.couleur = couleur
        this.poid = poid
        this.puissance = puissance
        this.capaciteReservoir = capaciteReservoir
        this.niveauDeCarburant = niveauDeCarburant
        this.nombreDePlace = nombreDePlace
        this.assure = assure
        this.msgTableaudeBord = msgTableaudeBord   
    }
    livraison(value=Boolean){
        if(!value){
            this.assure=value
            this.niveauDeCarburant=5
            this.msgTableaudeBord="vous n'êtes pas assurés "
            console.log(this.msgTableaudeBord)
        }
        else {
            this.assure=value
            this.msgTableaudeBord ="vous êtes assurés !"
            console.log(this.msgTableaudeBord)
        }
    }
    Pint(NouvelleCouleur) {   
        if (this.couleur === NouvelleCouleur){
            console.log("Merci pour ce rafrichissement!!");
        }else{
            this.couleur = NouvelleCouleur;
            console.log(`la nouvelle couleur est : ${NouvelleCouleur}, merci pour cette nouvelle couleur!`);
        }
    } 
    mettreCarburant( quantity = this.capaciteReservoir - this.niveauDeCarburant) {
        if(this.niveauDeCarburant < this.capaciteReservoir){
            console.log(`on peut rajouter  jusqu'à ${quantity} litres de Carburant`)
        }else{
            console.log(`votre reservoir est plein ! `)
        }
    }
    SeDeplacer(distance, vitesseMoyenne, consommation ) {
        distance= prompt("entrer la distance: ");
        console.log(distance);
        vitesseMoyenne = prompt("entrer la vitesse moyenne : ");
        console.log(vitesseMoyenne);
        if(vitesseMoyenne<50 ){
            consommation = distance * 0.1
        }
        if(vitesseMoyenne < 90 && vitesseMoyenne > 50){
            consommation= distance * 0.05
        }
        if(vitesseMoyenne <130  && vitesseMoyenne > 90){
            consommation= distance * 0.08
        }
        if(vitesseMoyenne > 130 ){
            consommation= distance * 0.08
        }
        if(this.niveauDeCarburant >= consommation){
            console.log(`vous allez consommer  ${consommation} litres pour faire ce trajet.`)
        }else{
            console.log(`il vous reste ${this.niveauDeCarburant} litres de carburant  et le trajet nécessite ${consommation} litres, vous ne pouvez pas effectuer ce trajet  vous n'avez pas assez de carburant`)
        }
    }
    toString(){
        return `Le numéro d'immatriculation est : ${this.immatriculation} , la puissance est : ${this.puissance} et sa couleur est ${this.couleur}`
    }
}
let Mavoiture = new Voiture("12 slk 56", "Rouge", 1500, 150, 60, 20, 5)
console.log(Mavoiture.toString());
Mavoiture.livraison(true);
Mavoiture.livraison;
Mavoiture.mettreCarburant();
Mavoiture.Pint("gris");
Mavoiture.SeDeplacer();


   
   


