import { Component } from '@angular/core';
import {NavComponent} from "../../../shared/components/nav/nav.component";

@Component({
  selector: 'app-interventions',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './interventions.component.html',
  styleUrl: './interventions.component.css'
})
export class InterventionsComponent {

}
