import styled from 'styled-components';

import { Widget, Header, Content } from '../components/Widget';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import HeadPage from '../components/HeadPage';

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
  return (
    <>
      <HeadPage
        title="The Witcher"
        content="Projeto criado durante a imersão react v2, promovida pela Alura."
        urlSite="https://alura-quiz-tw-3-pedrohenry-santos.vercel.app/"
        urlImage="https://animation-app-read.s3-sa-east-1.amazonaws.com/App_alura/ImageHome.png"
      />
      <QuizBackground>
        <QuizContainer>
          <Widget>
            <Header>
              <h1>The Witcher 3</h1>
            </Header>

            <Content>
              <p>Alguma descrição aleatoria!</p>
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
    </>
  );
};

export default Home;
