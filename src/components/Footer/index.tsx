import { motion } from 'framer-motion';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper
      as={motion.footer}
      transition={{ delay: 0.4, duration: 0.6 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      initial="hidden"
      animate="show"
    >
      <a href="https://www.alura.com.br/" rel="noreferrer" target="_blank">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Orgulhosamente criado durante a{' '}
        <a href="https://www.alura.com.br/" rel="noreferrer" target="_blank">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
