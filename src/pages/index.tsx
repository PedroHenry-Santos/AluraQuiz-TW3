import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { Widget, Header, Content, Topic } from '../components/Widget';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizLogo from '../components/QuizLogo';
import Input from '../components/Input';
import Button from '../components/Button';
import QuizContainer from '../components/QuizContainer';
import db from '../../db.json';
import Link from '../components/Link';

const Home: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 1 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' }
          }}
          initial="hidden"
          animate="show"
        >
          <Header>
            <h1>The Witcher 3</h1>
          </Header>
          <Content>
            <form
              onSubmit={e => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={e => {
                  setName(e.target.value);
                }}
                placeholder="Diz ai seu nome!"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
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
            <h1>Quizes da galera!</h1>
            <ul>
              {db.external.map((e, index) => {
                const [projectName, gitUser] = e
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <button
                    className="bt"
                    key={index}
                    disabled={name.length === 0}
                  >
                    {name.length === 0 ? (
                      <a>{`${projectName}/${gitUser}`}</a>
                    ) : (
                      <Link
                        href={`/quiz/${projectName}___${gitUser}?name=${name}`}
                      >{`${projectName}/${gitUser}`}</Link>
                    )}
                  </button>
                );
              })}
            </ul>
          </Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/PedroHenry-Santos" />
    </QuizBackground>
  );
};

export default Home;
