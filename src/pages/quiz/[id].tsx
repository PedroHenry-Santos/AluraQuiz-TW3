import { GetServerSideProps } from 'next';
import Lottie from 'react-lottie';

import { ThemeProvider } from 'styled-components';
import { DbExternal } from '../../@types/dbExternal';
import QuizPage from '../../components/QuizPage';
import Loading from '../../assets/loading.json';

export interface IndexProps {
  dbExternal: DbExternal;
  name: string | string[] | undefined;
}

const IdIndex: React.FC<IndexProps> = ({ dbExternal, name }) => {
  const theme = {
    colors: {
      primary: dbExternal.theme.colors.primary,
      secondary: dbExternal.theme.colors.secondary,
      mainBg: dbExternal.theme.colors.mainBg,
      contrastText: dbExternal.theme.colors.contrastText,
      wrong: dbExternal.theme.colors.wrong,
      success: dbExternal.theme.colors.success
    },
    borderRadius: dbExternal.theme.borderRadius,
    bg: dbExternal.bg
  };

  const loading = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <QuizPage name={name} dbExternal={dbExternal}>
        <Lottie options={loading}></Lottie>
      </QuizPage>
    </ThemeProvider>
  );
};

export default IdIndex;

export const getServerSideProps: GetServerSideProps<IndexProps> = async ctx => {
  const [projectName, gitUser] = (ctx.query.id as string).split('___');
  const { name } = ctx.query;

  const dbExternal = await fetch(
    `https://${projectName}-${gitUser}.vercel.app/api/db`
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
