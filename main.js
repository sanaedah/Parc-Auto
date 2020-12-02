class Voiture{
    constructor(immatriculation, couleur, poid, puissance, capaciteReservoir, niveauDessance, nombreDePlace, assure, msgTableaudeBord){
        this.immatriculation = immatriculation
        this.couleur = couleur
        this.poid = poid
        this.puissance = puissance
        this.capaciteReservoir = capaciteReservoir
        this.niveauDessance = niveauDessance
        this.nombreDePlace = nombreDePlace
        this.assure = assure
        this.msgTableaudeBord = msgTableaudeBord
    }
    repeindre(NouvelleCouleur) {   
        if (this.couleur === NouvelleCouleur){
            console.log("Merci pour ce rafrichissement!!");
        }else{
            this.couleur = NouvelleCouleur;
            console.log("Merci pour cette nouvelle couleur!");
           }
       }
    }
let Mavoiture = new Voiture("12 slk 56", "Rouge", 1500, 150, 60, 5)
console.log(Mavoiture);
Mavoiture.repeindre("grey");


   
   


