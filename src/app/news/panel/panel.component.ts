import {Component, HostListener, Input, OnInit} from '@angular/core';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';
import {TopicPanel} from '../../models/topic.model';
import {QuizService} from '../quiz.service';
import {Quiz, QuizChoice} from '../../models/quiz.model';
import {AuthService} from '../../auth/auth.service';

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
  tappingText: boolean = false;
  videoPlayer: VgAPI = null;
  quiz: Quiz;
  quizChoice: string;
  isActive = false;
  isLoading = false;

  constructor(
    private quizService: QuizService,
    private authService: AuthService,
  ) { }

  ngOnInit() {}

  onPlayerReady(api: VgAPI) {
    this.videoPlayer = api;
    this.videoPlayer.pause();
  }

  startViewing() {
    this.isActive = true;
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
    this.isActive = false;
    if (this.videoPlayer) {
      this.videoPlayer.pause();
    }
  }

  @HostListener('document:touchstart', ['$event'])
  startTappingText(event) {
    if (this.isActive && this.type === 'text') {
      this.tappingText = true;
    }
  }

  @HostListener('document:touchend', ['$event'])
  stopTappingText(event) {
    if (this.isActive && this.type === 'text') {
      this.tappingText = false;
    }
  }

  loadQuiz() {
    this.isLoading = true;
    this.quizService.get(this.panel.quiz).then(quiz => {
      this.quiz = quiz;
      this.isLoading = false;
    });
    this.authService.onAuthenticated().then(() => {
      this.quizService.getVote(this.panel.quiz).then(quizChoice => this.quizChoice = quizChoice);
    }).catch(() => {});
  }

  vote(choiceId: string) {
    this.authService.onAuthenticated(true).then(() => {
      this.quizService.vote(this.quiz, choiceId).then(() => this.quizChoice = choiceId);
    });
  }
}
