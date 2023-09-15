import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsTableComponent } from "./drinks/components/cocktails-table/cocktails-table.component";

const routes: Routes = [
  { path: 'drinks', component:CocktailsTableComponent },
  { path: '', redirectTo: '/drinks', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
