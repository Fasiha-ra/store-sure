import styled from "styled-components";

export const FormContainer = styled.form`
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: start;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
  }
  .textares {
    grid-column: span 2;
  }
  .btn {
    grid-column: span 2;
    display: flex;
    justify-content: end;
  }
  button {
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  &:focus {
    border-bottom: 2px solid #000;
  }
`;

export const RadioButtonGroup = styled.div`
  label {
    font-size: 15px;
    line-height: 19px;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 20px;
    display: flex;
    align-items: baseline;
  }
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  margin-bottom: 20px;
  .radiobtn {
    display: flex;
    flex-wrap: wrap;
    font-weight: 400;
  }
`;

export const RadioButton = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-weight: 400 input {
    margin-right: 10px;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  resize: none;
  height: 50px;
  font: caption;
  &:focus {
    border-bottom: 2px solid #000;
  }
`;
