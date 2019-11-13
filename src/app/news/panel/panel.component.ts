import {Component, Input, OnInit} from '@angular/core';
import {NewsPanel} from '../../models/newspanel.model';

@Component({
  selector: 'app-news-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class NewsPanelComponent implements OnInit {

  @Input() panel: NewsPanel;

  constructor() { }

  ngOnInit() {}

}
