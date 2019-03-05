import styled, { createGlobalStyle, css, keyframes } from "styled-components";



const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  background-color: white;

  border-radius: 10px;

  padding: 20px;
`;

export const rotation = keyframes`
from{
    transform : rotate(0deg);
}to{
    transform : rotate(360deg);

}`;

export const Input = styled.input.attrs({
  required: true
})`
  border-radius: 5px;
  ${awesomeCard}
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  bacground-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "green" : "red")};
  ${props => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;
export const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default Button;
