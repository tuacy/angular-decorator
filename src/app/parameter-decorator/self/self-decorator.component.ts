import {Component, OnInit, Self} from '@angular/core';
import {SelfComponentService} from './self-component.service';

@Component({
  selector: 'app-self-decorator',
  template: `
    <h3>@Self -- 获取当前组件(或者指令)注入器里面注入的对象(NgModule里面注入的都不行)</h3>
  `,
  providers: [SelfComponentService]
})
export class SelfDecoratorComponent implements OnInit {

  constructor(@Self() private componentService: SelfComponentService) {
  }

  ngOnInit() {
  }

}
