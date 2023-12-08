import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [

    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },

    {
      id: uuid(),
      name: 'Gokú',
      power: 9000
    },

    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }

  ];

  addCharacter(character: Character): void {

    const newCharacter = { id: uuid(), ...character };

    this.characters.push(newCharacter);

  }

  deleteCharacterById(id:string): void {

    // Borramos el elemento en la posición index
    //this.characters.splice(index, 1);

    this.characters = this.characters.filter(character => character.id !== id);

  }

}
