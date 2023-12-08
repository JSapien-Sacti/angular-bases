import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
    //document.querySelectorAll('h1')!.forEach((h1) => {
      //h1.innerHTML = '<H1>Desde Angular</H1>';
    //});
  }



}
