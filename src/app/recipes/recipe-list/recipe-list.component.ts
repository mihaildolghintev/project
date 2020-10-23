import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/736x/bb/c1/89/bbc1899d3b4419b03742b4bb3a3abb35.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
