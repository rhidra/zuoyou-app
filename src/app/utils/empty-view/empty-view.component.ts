import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-empty-view',
  templateUrl: './empty-view.component.html',
})
export class EmptyViewComponent implements OnInit {

  @Input() icon: string = 'sad';
  @Input() text: string = 'Nothing has been found here';
  @Input() buttonText: string = '';
  @Output() buttonClick = new EventEmitter();
  @Input() spinner: boolean = false;
  @Input() color: string = 'medium';

  constructor() { }

  ngOnInit() {}

}
