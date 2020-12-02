class Voitures{
    constructor(immatriculation, couleur, poid, puissance, capaciteReservoir, niveauDessance, nombreDePlace, assure, msgTableaudeBord){
        this.immatriculation = immatriculation,
        this.couleur = couleur,
        this.poid = poid,
        this.puissance = puissance,
        this.capaciteReservoir = capaciteReservoir,
        this.niveauDessance = niveauDessance,
        this.nombreDePlace = nombreDePlace,
        this.assure = assure,
        this.msgTableaudeBord = msgTableaudeBord
    }
        
        repeindre(NouvelleCouleur) {
           
           if (this.couleur === NouvelleCouleur){
               console.log("Merci pour ce rafrichissement!!");
           }else{
               this.couleur = NouvelleCouleur;
               console.log("Merci pour cette nouvelle couleur!")
           }
       }
    }


let Mavoiture = new Voitures("12 slk 56", "Rouge", "1500 KG", 150 , "60 litres" , " 5 places")

console.log(Mavoiture);
Mavoiture.repeindre("grey");


   
   


