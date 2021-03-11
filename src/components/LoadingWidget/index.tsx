import { Content, Widget } from '../Widget';

import styled from 'styled-components';

const LoadingWidget: React.FC = ({ children }) => {
  const Anima = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    > div {
      width: 150px;
      height: 150px;
    }

    > h2 {
      padding-top: 20px;
    }
  `;

  return (
    <Widget>
      <Content>
        <Anima>
          <div>{children}</div>
          <h2>Carregando...</h2>
        </Anima>
      </Content>
    </Widget>
  );
};

export default LoadingWidget;
