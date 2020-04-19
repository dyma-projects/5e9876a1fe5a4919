import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  imgSource = "https://img.cuisineaz.com/400x320/2013-12-20/i14978-recette-de-mojito.jpeg";
  public description: string = "Une description de l'image";

  constructor() { }

  ngOnInit(): void {
  }

  public imgClick()
  {
    console.log(this.imgSource);
  }

}
