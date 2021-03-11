import { useEffect, useState } from 'react';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import QuizContainer from '../../components/QuizContainer';
import QuestionWidget from '../../components/QuestionWidget';
import ResultWidget from '../../components/ResultWidget';
import LoadingWidget from '../../components/LoadingWidget';
import { DbExternal } from '../../@types/dbExternal';
import NextLoadingWidget from '../NextLoadingWidget';
import ResultLoadingWidget from '../ResultLoadingWidget ';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  NEXTLOADING: 'NEXTLOADING',
  RESULTLOADING: 'RESULTLOADING',
  RESULT: 'RESULT'
};

export interface IndexProps {
  dbExternal: DbExternal;
  name: string | string[] | undefined;
}

const QuizPage: React.FC<IndexProps> = ({ children, dbExternal, name }) => {
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
    }, 5000);
  }, []);

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setScreen(screenStates.NEXTLOADING);

      setTimeout(() => {
        setQuestionIndex(questionIndex + 1);
        setScreen(screenStates.QUIZ);
      }, 4000);
    } else {
      setScreen(screenStates.NEXTLOADING);
      setTimeout(() => {
        setScreen(screenStates.RESULTLOADING);
        setTimeout(() => {
          setScreen(screenStates.RESULT);
        }, 4100);
      }, 4000);
    }
  };

  const reset = () => {
    setScreen(screenStates.LOADING);
    setQuestionIndex(0);
    setResults([]);
    setTimeout(() => {
      setScreen(screenStates.QUIZ);
    }, 5000);
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
        {screen === screenStates.LOADING && (
          <LoadingWidget>{children}</LoadingWidget>
        )}
        {screen === screenStates.RESULT && (
          <ResultWidget
            name={name}
            dbExternal={dbExternal}
            results={results}
            reset={reset}
          />
        )}
        {screen === screenStates.NEXTLOADING && (
          <NextLoadingWidget>{children}</NextLoadingWidget>
        )}
        {screen === screenStates.RESULTLOADING && (
          <ResultLoadingWidget>{children}</ResultLoadingWidget>
        )}
      </QuizContainer>
    </QuizBackground>
  );
};

export default QuizPage;
