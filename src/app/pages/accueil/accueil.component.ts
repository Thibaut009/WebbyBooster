import { Component } from '@angular/core';
import {NavComponent} from "../../../shared/components/nav/nav.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
