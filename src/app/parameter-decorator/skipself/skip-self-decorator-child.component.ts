import {Component, OnInit, SkipSelf} from '@angular/core';
import {SkipSelfModuleService} from './skip-self-module.service';
import {SkipSelfComponentService} from './skip-self-component.service';

@Component({
  selector: 'app-skip-self-decorator-child',
  template: `
  `,
})
export class SkipSelfDecoratorChildComponent implements OnInit {

  constructor(@SkipSelf() componentService: SkipSelfComponentService,
              @SkipSelf() moduleService: SkipSelfModuleService) {
  }

  ngOnInit() {
  }

}
