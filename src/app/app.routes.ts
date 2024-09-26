import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { BPFComponent } from "./pages/bpf/bpf.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { CoursEnStockComponent } from "./pages/cours-en-stock/cours-en-stock.component";
import { FacturationsComponent } from "./pages/facturations/facturations.component";
import { IntermediairesComponent } from "./pages/intermediaires/intermediaires.component";
import { InterventionsComponent } from "./pages/interventions/interventions.component";
import { MesCandidaturesComponent } from "./pages/mes-candidatures/mes-candidatures.component";
import { MesDocumentsComponent } from "./pages/mes-documents/mes-documents.component";
import { MissionsEtContratsComponent } from "./pages/missions-et-contrats/missions-et-contrats.component";
import { OrganismesDeFormationComponent } from "./pages/organismes-de-formation/organismes-de-formation.component";
import { SuiviCAComponent } from "./pages/suivi-ca/suivi-ca.component";
import { TachesComponent } from "./pages/taches/taches.component";

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'bpf', component: BPFComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'cours-en-stock', component: CoursEnStockComponent },
  { path: 'facturations', component: FacturationsComponent },
  { path: 'intermediaires', component: IntermediairesComponent },
  { path: 'interventions', component: InterventionsComponent },
  { path: 'mes-candidatures', component: MesCandidaturesComponent },
  { path: 'mes-documents', component: MesDocumentsComponent },
  { path: 'missions-et-contrats', component: MissionsEtContratsComponent },
  { path: 'organismes-de-formation', component: OrganismesDeFormationComponent },
  { path: 'suivis-ca', component: SuiviCAComponent },
  { path: 'taches', component: TachesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
