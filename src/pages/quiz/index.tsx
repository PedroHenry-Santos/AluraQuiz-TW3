import { GetServerSideProps } from 'next';
import { DbExternal } from '../../@types/dbExternal';
import QuizPage from '../../components/QuizPage';

export interface IndexProps {
  dbExternal: DbExternal;
}

const Index: React.FC<IndexProps> = ({ dbExternal }) => {
  return <QuizPage dbExternal={dbExternal} />;
};

export default Index;

export const getServerSideProps: GetServerSideProps<IndexProps> = async ctx => {
  const dbExternal = await fetch(
    'https://alura-quiz-tw-3-pedrohenry-santos.vercel.app/'
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
      dbExternal
    }
  };
};
