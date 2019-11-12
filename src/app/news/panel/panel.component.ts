import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class NewsPanelComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {}

}
