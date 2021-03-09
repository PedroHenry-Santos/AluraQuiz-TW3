import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Widget, Header, Content } from '../components/Widget';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizLogo from '../components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Home: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Header>
            <h1>The Witcher 3</h1>
          </Header>
          <Content>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder=""
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar{` ${name}`}
              </button>
            </form>
          </Content>
        </Widget>
        <Widget>
          <Content>
            <h1>Quizes da galera!</h1>
            <p>Alguma descrição aleatoria!</p>
          </Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/PedroHenry-Santos" />
    </QuizBackground>
  );
};

export default Home;
