export class Quiz {
  _id: string;
  question: string;
  content: string;
  topic: string;

  choices: Array<{
    _id: string;
    text: string,
    color: string,
  }> = [];
}
