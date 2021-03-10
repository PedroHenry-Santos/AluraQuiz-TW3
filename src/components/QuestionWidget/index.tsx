import { useState } from 'react';
import AlternativesForm from '../AlternativesForm';
import BackLinkArrow from '../BackLinkArrow';
import Button from '../Button';
import { Content, Header, Topic, Widget } from '../Widget';

interface Question {
  image: string;
  title: string;
  description?: string;
  answer: number;
  alternatives: string[];
}

interface Props {
  question: Question;
  questionIndex: number;
  totalQuestion: number;
  onSubmit: () => void;
  addResult: (result: boolean) => void;
}

const QuestionWidget: React.FC<Props> = ({
  question,
  questionIndex,
  totalQuestion,
  onSubmit,
  addResult
}) => {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState<
    number | undefined
  >(undefined);
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternaticeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Header>
        <BackLinkArrow href="/" />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestion}`}</h3>
      </Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
        src={question.image}
      />
      <Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <AlternativesForm
          onSubmit={e => {
            e.preventDefault();
            setIsFormSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              setIsFormSubmited(false);
              setSelectedAlternative(undefined);
              onSubmit();
            }, 1000);
          }}
        >
          {question.alternatives.map(
            (alternative: string, alternativeIndex: number) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
              const isSelected = selectedAlternative === alternativeIndex;
              console.log(isSelected);

              return (
                <Topic
                  key={alternativeId}
                  as="label"
                  htmlFor={alternativeId}
                  data-selected={isSelected}
                  data-status={isFormSubmited && alternativeStatus}
                >
                  <input
                    style={{ display: 'none' }}
                    id={alternativeId}
                    name={questionId}
                    onChange={() => setSelectedAlternative(alternativeIndex)}
                    type="radio"
                  />
                  {alternative}
                </Topic>
              );
            }
          )}
          <Button type="submit" disabled={!hasAlternaticeSelected}>
            Confirmar
          </Button>
          {isFormSubmited && isCorrect && <p>Você acertou!</p>}
          {isFormSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Content>
    </Widget>
  );
};

export default QuestionWidget;
