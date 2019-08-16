import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
  height: calc(100vh);
  width: 100%;
  display: flex;
  background-size: cover;
`;

export const LoginFormFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginButton = styled.button`
  font-size: 14px;
  border-radius: 8px;
  margin-top: 5px;
  padding: 10px;
  /* box-shadow: 0px 0px 8px 0px #aaaaaa; */
  &:hover {
    cursor: pointer;
  }
`;

export const email = css`
  height: 20px;
  padding: 3px;
  width: auto;
`;

export const LoginFormContainer = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -100px;
`;

export const FormContainer = styled.form``;

export const FormLabel = styled.label`
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
`;

const FormInputCSS = css`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
`;
export const EmailInput = styled.input.attrs((props) => ({ ...props, type: 'text' }))`
  ${FormInputCSS}
`;

export const PasswordInput = styled.input.attrs((props) => ({ ...props, type: 'password' }))`
  ${FormInputCSS}
`;

export const LoginRegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
