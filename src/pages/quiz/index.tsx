import { GetServerSideProps } from 'next';
import Lottie from 'react-lottie';

import { DbExternal } from '../../@types/dbExternal';
import QuizPage from '../../components/QuizPage';
import Swords from '../../assets/swords.json';

export interface IndexProps {
  dbExternal: DbExternal;
  name: string | string[] | undefined;
}

const Index: React.FC<IndexProps> = ({ dbExternal, name }) => {
  const swords = {
    loop: true,
    autoplay: true,
    animationData: Swords,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <QuizPage name={name} dbExternal={dbExternal}>
      <Lottie options={swords}></Lottie>
    </QuizPage>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<IndexProps> = async ctx => {
  const { name } = ctx.query;

  const dbExternal = await fetch(
    'https://alura-quiz-tw-3-pedrohenry-santos.vercel.app/api/db'
  )
    .then(respServer => {
      if (respServer.ok) {
        return respServer.json();
      }

      throw new Error('Falha em pegar os erros');
    })
    .then(respConvertProps => respConvertProps)
    .catch(err => console.error(err));

  return {
    props: {
      dbExternal,
      name
    }
  };
};
