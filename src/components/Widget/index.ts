import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #1769aa;
  background-color: #1c1814;
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${props => props.theme.colors.primary};

  * {
    margin: 0;
  }
`;

const Content = styled.header`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  .bt {
    width: 100%;
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => `${theme.colors.primary}40`};
    margin-bottom: 10px;
    transition: 0.3s;
    &:disabled {
      background-color: #979797;
      cursor: not-allowed;
    }
    &:hover,
    &:focus {
      opacity: 0.5;
    }

    a {
      font-size: 16px;
      width: 100%;
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.contrastText};
    }
  }
`;

const Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export { Widget, Header, Content, Topic };
