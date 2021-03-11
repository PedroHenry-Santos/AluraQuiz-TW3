import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import QuizContainer from '../QuizContainer';
import { Content, Header, Widget, Topic } from '../Widget';
import { DbExternal } from '../../@types/dbExternal';
import db from '../../../db.json';

interface Results {
  results: boolean[];
  name: string | string[] | undefined;
  dbExternal: DbExternal;
  reset: () => void;
}

const Button = styled(Link)`
  cursor: none;
`;

const ResultWidget: React.FC<Results> = ({
  results,
  name,
  dbExternal,
  reset
}) => {
  localStorage.removeItem('result');

  return (
    <QuizContainer>
      <Widget>
        <Header>
          <h3>Tela de resultados:</h3>
        </Header>

        <Content>
          <p>{`${name}, você acertou ${results.filter(x => x).length} ${
            results.filter(x => x).length > 1 ? 'perguntas' : 'pergunta'
          }.`}</p>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <Topic
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 0,
                    paddingLeft: '20px'
                  }}
                >
                  {`${index + 1}º pergunta:`}

                  {result ? (
                    <p
                      style={{
                        paddingLeft: '3px',
                        fontWeight: 600,
                        color: dbExternal.theme.colors.success
                      }}
                    >
                      {' '}
                      acertou
                    </p>
                  ) : (
                    <p
                      style={{
                        paddingLeft: '3px',
                        fontWeight: 600,
                        color: dbExternal.theme.colors.wrong
                      }}
                    >
                      {' '}
                      errou
                    </p>
                  )}
                </Topic>
              </li>
            ))}
          </ul>
        </Content>
      </Widget>
      <Widget
        as={motion.section}
        transition={{ delay: 0.2, duration: 0.8 }}
        variants={{
          show: { opacity: 1, y: '0' },
          hidden: { opacity: 0, y: '50%' }
        }}
        initial="hidden"
        animate="show"
      >
        <Content>
          <p>Tente esse outros quizzes:</p>
          <ul>
            <button
              style={{ cursor: 'none' }}
              className="bt"
              onClick={() => reset()}
            >
              <Button
                href={`/quiz/${'alura-quiz-tw-3'}___${'pedrohenry-santos'}?name=${name}`}
              >{`${'alura-quiz-tw-3'}/${'pedrohenry-santos'}`}</Button>
            </button>
            {db.external.map((e, index) => {
              const [projectName, gitUser] = e
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');

              return (
                <button
                  style={{ cursor: 'none' }}
                  className="bt"
                  key={index}
                  onClick={() => reset()}
                >
                  <Button
                    href={`/quiz/${projectName}___${gitUser}?name=${name}`}
                  >{`${projectName}/${gitUser}`}</Button>
                </button>
              );
            })}
          </ul>
        </Content>
      </Widget>
    </QuizContainer>
  );
};

export default ResultWidget;
