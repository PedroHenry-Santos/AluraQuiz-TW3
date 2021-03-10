import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected='true'] {
      background-color: ${props => props.theme.colors.primary};

      &[data-status='SUCCESS'] {
        background-color: ${props => props.theme.colors.success};
      }
      &[data-status='ERROR'] {
        background-color: ${props => props.theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    }
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
