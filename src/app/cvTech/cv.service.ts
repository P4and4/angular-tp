import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[] = [];
  constructor() {
  this.personnes = [
    new Personne (1,'Ben Zaied','Mouna', 23,'mouna.png',7777777,'Etudiante Mamrouja'),
    new Personne (2,'Ouhibi','Ons', 22,'ons.png',8888888,'Etudiante Mamrouja 2'),
    new Personne(3,'Makni','Mariem', 22,'mariem.png',6666666,'Etudiante Teeba'),
    new Personne(4,'Taghlet','Narjes', 22,'jess.jpg',5555555,'Etudiante Teeba 2')
];
}
getPersonnes(): Personne[] {
    return this.personnes;
}
}
