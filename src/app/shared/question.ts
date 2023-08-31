export interface Question {
  number: number;
  type: 'single' | 'multi' | 'fill'; // Add the type property
  question: string;
  options: string[];
  answer: string | string[];
  showAnswer?: boolean;
  showOptions?: boolean;
  isCorrect?: boolean;
}
