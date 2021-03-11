import styled from 'styled-components';
import Lottie from 'react-lottie';

import { Content, Widget } from '../Widget';
import Analizing from '../../assets/analizing.json';

const ResultLoadingWidget: React.FC = () => {
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

  const analizing = {
    loop: false,
    autoplay: true,
    animationData: Analizing,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Widget>
      <Content>
        <Anima>
          <div>
            <Lottie options={analizing}></Lottie>
          </div>
          <h2>Contando pontos...</h2>
        </Anima>
      </Content>
    </Widget>
  );
};

export default ResultLoadingWidget;
