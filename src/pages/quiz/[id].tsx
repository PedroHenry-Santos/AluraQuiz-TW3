import { GetServerSideProps } from 'next';
import { ThemeProvider } from 'styled-components';
import { DbExternal } from '../../@types/dbExternal';
import QuizPage from '../../components/QuizPage';

export interface IndexProps {
  dbExternal: DbExternal;
}

const IdIndex: React.FC<IndexProps> = ({ dbExternal }) => {
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

  return (
    <ThemeProvider theme={theme}>
      <QuizPage dbExternal={dbExternal} />
    </ThemeProvider>
  );
};

export default IdIndex;

export const getServerSideProps: GetServerSideProps<IndexProps> = async ctx => {
  const [projectName, gitUser] = ctx.query.id.split('___');

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
      dbExternal
    }
  };
};
