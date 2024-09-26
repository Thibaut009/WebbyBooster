import { Component } from '@angular/core';
import {NavComponent} from "../../../shared/components/nav/nav.component";

@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './taches.component.html',
  styleUrl: './taches.component.css'
})
export class TachesComponent {

}
