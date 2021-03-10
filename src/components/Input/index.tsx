import { ChangeEvent } from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  value: string;
}

const Input: React.FC<Props> = ({ onChange, placeholder = '', ...props }) => {
  return (
    <div>
      <InputBase onChange={onChange} placeholder={placeholder} {...props} />
    </div>
  );
};

export default Input;
