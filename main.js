class Voitures{
    constructor(immatriculation, color, poid, puissance, capaciteReservoir, niveauDessance, nombreDePlace, assure, msgTableaudeBord){
        this.immatriculation = immatriculation,
        this.color = color,
        this.poid = parseInt( poid),
        this.puissance = parseInt(puissance),
        this.capaciteReservoir = parseFloat(capaciteReservoir),
        this.niveauDessance = parseFloat(niveauDessance),
        this.nombreDePlace = parseInt(nombreDePlace),
        this.assure = assure,
        this.msgTableaudeBord = msgTableaudeBord
    }
        
        repeindre(NouvelleCouleur) {
           
           if (this.color === NouvelleCouleur){
               console.log("Merci pour ce rafrichissement!!");
           }else{
               console.log("Merci pour cette nouvelle couleur!")
           }
          
       }
       /*
        MettreEssence() {
           let quantity = capaciteReservoir - niveauDessance
           if(niveauDessance<capaciteReservoir){
               console.log(`on peut rajouter ${quantity}de l'essence`)
           }else{
               console.log(`votre reservoir est plein ! `)
           }
           
       }
        SeDeplacer() {
          let distance = null;
          let vitesseMoyenne = null;
          let consommation = null;
          if(vitesseMoyenne<50 ){
           
          }
          if(vitesseMoyenne < 90 || vitesseMoyenne > 50){
              consommation= distance * 0.05
             
          }
          if(vitesseMoyenne <130  || vitesseMoyenne > 90){
            consommation= distance * 0.08
           
          }
          if(vitesseMoyenne > 130 ){
            consommation= distance * 0.08
          }
          do{
            console.log(`vous aurez besoin de ${consommation} pour faire ce trajet.`)
          }while(
            niveauDessance>=consommation
          )
            
          }

        DonneeNeceessaire(){

            return ("numéro d'immatriculation : ",this.immatriculation, "couleur de la voiture: ",this.color, "le poid: ",this.poid, "puissance : ", this.puissance, "capacité de reservoir : ", this.capaciteReservoir, "nombre de places: ",this.nombreDePlace)
        }*/

    }


let Mavoiture = new Voitures ("12_slk_56", "red", 54,7,60, 5)
NouvelleCouleur= "grey";
console.log(Mavoiture);
return repeindre();


    /*
//function Myvoiture(immatriculation, color, poid, puissance, capaciteReservoir, nombreDePlace)
class voiture extends Voitures{
    constructor(immatriculation, color, poid, puissance, capaciteReservoir, nombreDePlace){
        super(immatriculation, color, poid, puissance, capaciteReservoir, nombreDePlace)
    }
   } */
   


