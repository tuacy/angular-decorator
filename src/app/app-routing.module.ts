import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'classDecorator',
    loadChildren: './class-decorator/class-decorator.module#ClassDecoratorModule'
  },
  {
    path: 'attributesDecorator',
    loadChildren: './attributes-decorator/attributes-decorator.module#AttributesDecoratorModule'
  },
  {
    path: '',
    redirectTo: '/classDecorator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
