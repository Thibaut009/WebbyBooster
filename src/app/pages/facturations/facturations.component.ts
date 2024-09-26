import { Component } from '@angular/core';
import {NavComponent} from "../../../shared/components/nav/nav.component";

@Component({
  selector: 'app-facturations',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './facturations.component.html',
  styleUrl: './facturations.component.css'
})
export class FacturationsComponent {

}
