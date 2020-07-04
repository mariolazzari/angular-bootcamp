import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective],
  imports: [CommonModule, ElementsRoutingModule],
  exports: []
})
export class ElementsModule {}
