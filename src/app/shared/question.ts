export interface Question {
  number: number;
  type: 'single' | 'multiple' | 'fill-in'; // Add the type property
  question: string;
  options: string[];
  answer: string | string[];
  showAnswer?: boolean;
  showOptions?: boolean;
  isCorrect?: boolean;
}
