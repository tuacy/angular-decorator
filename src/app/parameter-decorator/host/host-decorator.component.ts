import {Component, Host, Inject, OnInit} from '@angular/core';
import {HostComponentService} from "./host-component.service";
import {TOKEN_HOST_CLASS_PROVIDER} from "../parameter-decorator-constant";
import {HostTokenComponentService} from "./host-token-component.service";

@Component({
  selector: 'app-host-decorator',
  template: `
    <h3>@Inject -- 获取注入器里面指定token对应的服务实例对象</h3>
  `,
  providers: [
    HostComponentService,
    {provide: TOKEN_HOST_CLASS_PROVIDER, useClass: HostTokenComponentService}
  ]
})
export class HostDecoratorComponent implements OnInit {

  constructor(@Host() private componentService: HostComponentService,
              @Host() @Inject(TOKEN_HOST_CLASS_PROVIDER) private tokenService: HostTokenComponentService) {
  }

  ngOnInit() {
  }

}
