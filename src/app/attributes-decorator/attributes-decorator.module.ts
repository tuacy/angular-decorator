import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttributesDecoratorRoutingModule} from './attributes-decorator-routing.module';
import {AttributesDecoratorComponent} from './attributes-decorator.component';

@NgModule({
  declarations: [
    AttributesDecoratorComponent
  ],
  imports: [
    CommonModule,
    AttributesDecoratorRoutingModule
  ]
})
export class AttributesDecoratorModule {
}
