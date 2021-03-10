import { Content, Header, Widget } from '../Widget';

interface Results {
  results: boolean[];
}

const ResultWidget: React.FC<Results> = ({ results }) => {
  return (
    <Widget>
      <Header>
        <h3>Tela de resultados:</h3>
      </Header>

      <Content>
        <p>{`Você acertou ${results.filter(x => x).length} perguntas`}</p>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{`${index + 1}º resultado: Você ${
              result ? 'acertou' : 'errou'
            } `}</li>
          ))}
        </ul>
      </Content>
    </Widget>
  );
};

export default ResultWidget;
