import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassDecoratorRoutingModule} from './class-decorator-routing.module';
import {ClassDecoratorComponent} from './class-decorator.component';

@NgModule({
  declarations: [
    ClassDecoratorComponent
  ],
  imports: [
    CommonModule,
    ClassDecoratorRoutingModule
  ]
})
export class ClassDecoratorModule {
}
