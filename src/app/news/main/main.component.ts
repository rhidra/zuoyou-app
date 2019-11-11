import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class NewsMainComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {}

}
