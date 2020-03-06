import {Component, Input, OnInit} from '@angular/core';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';
import {TopicPanel} from '../../models/topic.model';
import {QuizService} from '../quiz.service';
import {Quiz} from '../../models/quiz.model';

@Component({
  selector: 'app-news-panel',
  templateUrl: './panel.component.html',
})
export class PanelComponent implements OnInit {


  _panel: TopicPanel;
  @Input()
  set panel(p: TopicPanel) {
    this.type = p.quiz ? 'quiz' : p.text ? 'text' : 'video';
    this._panel = p;
    if (this.type === 'quiz') {
      this.loadQuiz();
    }
  }
  get panel(): TopicPanel { return this._panel; }

  type: string;
  video: string;
  videoPlayer: VgAPI = null;
  quiz: Quiz;
  isLoading = false;

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit() {}

  onPlayerReady(api: VgAPI) {
    this.videoPlayer = api;
    this.videoPlayer.pause();
  }

  startViewing() {
    if (this.videoPlayer) {
      this.videoPlayer.play();
    }
  }

  rewind() {
    if (this.videoPlayer) {
      this.videoPlayer.seekTime(this.videoPlayer.currentTime - 5);
    }
  }

  stopViewing() {
    if (this.videoPlayer) {
      this.videoPlayer.pause();
    }
  }

  loadQuiz() {
    this.isLoading = true;
    this.quizService.get(this.panel.quiz).then(quiz => {
      this.quiz = quiz;
      this.isLoading = false;
    });
  }

  vote(choiceId: string) {
    this.quizService.vote(this.quiz, choiceId);
  }
}
