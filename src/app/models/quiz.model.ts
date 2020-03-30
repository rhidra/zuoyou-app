export class Quiz {
  _id: string;
  question: string;
  content: string;
  topic: string;
  isPoll: boolean;

  choices: Array<QuizChoice> = [];
}

export class QuizChoice {
  _id: string;
  text: string;
  color: string;
  goodAnswer: boolean;
  count?: number;
}
