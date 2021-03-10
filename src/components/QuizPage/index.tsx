import { useEffect, useState } from 'react';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import QuizContainer from '../../components/QuizContainer';
import QuestionWidget from '../../components/QuestionWidget';
import ResultWidget from '../../components/ResultWidget';
import LoadingWidget from '../../components/LoadingWidget';
import { DbExternal } from '../../@types/dbExternal';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
};

export interface IndexProps {
  dbExternal: DbExternal;
}

const QuizPage: React.FC<IndexProps> = ({ dbExternal }) => {
  const [screen, setScreen] = useState(screenStates.LOADING);
  const [results, setResults] = useState<boolean[]>([]);
  const totalQuestions = dbExternal.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = dbExternal.questions[questionIndex];

  const addResult = (result: boolean) => {
    setResults([...results, result]);
  };

  useEffect(() => {
    setTimeout(() => {
      setScreen(screenStates.QUIZ);
    }, 1000);
  }, []);

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreen(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        {screen === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestion={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screen === screenStates.LOADING && <LoadingWidget />}
        {screen === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
};

export default QuizPage;
