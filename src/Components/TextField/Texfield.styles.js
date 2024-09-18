import styled, { css } from "styled-components";

export const InputWrap = styled.div`
  width: 100%;
  position: relative;
  label {
    width: 100%;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    color: var(--black);
    z-index: 5;
    display: flex;
    margin-bottom: 10px;
    @media screen and (min-width: 1441px) {
      font-size: 18px;
    }
  }
`;

export const StyledTexfield = styled.div`
  padding: 12px 25px;
  border-radius: 15px;
  /* border-radius: ${({ $variant }) =>
    $variant == "input" ? "60px" : "20px"}; */
  background: #f2f4f6;
  color: var(--black);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      padding: 12px 20px;
    `}
  textarea {
    width: 100%;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    background-color: transparent;
    height: 96px;
    border: none;
    outline: none;
    resize: none;
    padding: 0;
    color: var(--black);
    &::placeholder {
      color: var(--black);
    }
  }
`;

export const StyledTextareaWrap = styled.div`
  padding: 12px 25px;
  border-radius: 20px;
  min-height: 120px;
  background: #f2f4f6;
  /* background-color: var(--light-gray); */
  color: var(--black);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      padding: 12px 25px;
    `}
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: 12px;
  left: 20px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  border-radius: 11px;
  color: var(--black);
  width: 100%;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  &::placeholder {
    color: var(--black);
  }
`;
export const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  background: transparent;
  color: var(--black);
  width: 100%;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  &::placeholder {
    color: var(--black);
  }
`;
export const PhoneWrapper = styled.div`
  .input-phone {
    border-radius: 60px;
    background: #f2f4f6;
    position: relative;
    box-sizing: border-box;
    width: 100%;
  }
  label {
    width: 100%;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    color: var(--black);
    z-index: 5;
    display: flex;
    margin-bottom: 10px;
    @media screen and (min-width: 1441px) {
      font-size: 18px;
    }
  }
  .PhoneInputCountrySelect {
    background: var(--gray-250);
    padding: 20px;
    flex-shrink: 0;
    border: 0px;
    outline: none;
    display: block;
    border-radius: 50px;
    @media screen and (max-width: 576px) {
      padding: 10px;
    }
  }
  .PhoneInputCountry {
    padding: 10px;
    background: var(--gray-250);
    border-radius: 60px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media screen and (max-width: 576px) {
      width: 70px;
      border-radius: 20px;
    }
  }
  .PhoneInput {
    input {
      box-sizing: border-box;
      background: var(--gray-250);
      border: none;
      outline: none;
      height: 50px;
      padding: 12px 20px;
      border-radius: 60px;
      color: var(--matte-black);
      font-size: 18px;
      line-height: 22px;
      font-style: normal;
      font-weight: 500;
      &::placeholder {
        color: var(--gray-50);
      }
      @media screen and (max-width: 576px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`;
export const OtpInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  input {
    max-width: 88px;
    border: 0.8px solid var(--gray-150);
    border-radius: 20px;
    padding: 25px 35px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    &::placeholder {
      font-size: 35px;
      line-height: 20px;
      color: var(--gray-150);
    }
  }
`;
