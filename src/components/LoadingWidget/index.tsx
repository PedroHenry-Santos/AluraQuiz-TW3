import { Content, Header, Widget } from '../Widget';

const LoadingWidget: React.FC = () => {
  return (
    <Widget>
      <Header>
        <h3>Carregando...</h3>
      </Header>

      <Content>[Desafio do Loading]</Content>
    </Widget>
  );
};

export default LoadingWidget;
