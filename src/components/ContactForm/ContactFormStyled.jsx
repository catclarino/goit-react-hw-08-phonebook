import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: #e7ecf2;
  border: 3px solid #689268;
  border-radius: 4px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #00000;
  font-size: 20px;
`;

export const Input = styled.input`
  color: #171718;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #689268;
  color: #00000;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    color: white;
    background-color: #689268;
    cursor: pointer;
  }
`;
