import {AfterContentInit, Component, ContentChild} from '@angular/core';
import {ContentChildComponent} from './content-child.component';

@Component({
  selector: 'app-content-parent',
  templateUrl: './content-parent.component.html',
  styleUrls: ['./content-parent.component.less']
})
export class ContentParentComponent implements AfterContentInit {

  // 通过类型获取 -- ngAfterContentInit
  @ContentChild(ContentChildComponent)
  contentChild: ContentChildComponent;

  constructor() {
  }

  ngAfterContentInit() {
    this.contentChild.initValue = '@ContentChild';
  }

}
