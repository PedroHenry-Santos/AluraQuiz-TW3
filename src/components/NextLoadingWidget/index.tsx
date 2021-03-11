import styled from 'styled-components';
import Lottie from 'react-lottie';

import Correct from '../../assets/correct.json';
import False from '../../assets/false.json';
import { Content, Widget } from '../Widget';

const NextLoadingWidget: React.FC = () => {
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

  const correct = {
    loop: false,
    autoplay: true,
    animationData: Correct,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const incorret = {
    loop: false,
    autoplay: true,
    animationData: False,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const check = localStorage.getItem('result');

  return (
    <Widget>
      <Content>
        <Anima>
          <div>
            {check === 'false' ? (
              <Lottie options={incorret}></Lottie>
            ) : (
              <Lottie options={correct}></Lottie>
            )}
          </div>
          {check === 'false' ? (
            <h2>Pocha! Você errou!</h2>
          ) : (
            <h2>Parabéns! Você acertou.</h2>
          )}
        </Anima>
      </Content>
    </Widget>
  );
};

export default NextLoadingWidget;
