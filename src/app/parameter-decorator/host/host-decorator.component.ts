import {Component} from '@angular/core';
import {HostComponentService} from './host-component.service';
import {TOKEN_HOST_CLASS_PROVIDER} from '../parameter-decorator-constant';
import {HostTokenComponentService} from './host-token-component.service';

@Component({
  selector: 'app-host-decorator',
  template: `
    <h3>@Host -- 获取宿主元素注入器里面注入的对象</h3>
    <ng-content></ng-content>
  `,
  providers: [
    HostComponentService,
    {provide: TOKEN_HOST_CLASS_PROVIDER, useClass: HostTokenComponentService}
  ]
})
export class HostDecoratorComponent {

}
