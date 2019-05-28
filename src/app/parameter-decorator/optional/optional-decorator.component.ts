import {Component, OnInit, Optional} from '@angular/core';
import {OptionalComponentService} from './optional-component.service';

@Component({
  selector: 'app-optional-decorator',
  template: `
    <h3>@Optional -- 和@Inject类似，唯一的区别果如果没有找到依赖关系,注入器将提供null</h3>
  `
})
export class OptionalDecoratorComponent implements OnInit {


  /**
   * @Optional() private componentService: OptionalComponentService
   * 等价于
   * @Optional(OptionalComponentService) private componentService: OptionalComponentService
   */
  constructor(@Optional() private componentService: OptionalComponentService) {
    // 因为OptionalComponentService我没有在任何地方提供给注入器，所以componentService应该是null
    if (componentService == null) {
      console.log('没有提供该服务');
    }
  }

  ngOnInit() {
  }

}
