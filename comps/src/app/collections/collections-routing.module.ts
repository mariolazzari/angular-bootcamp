import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

const routes: Routes = [
  { path: 'collections', component: CollectionsHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
