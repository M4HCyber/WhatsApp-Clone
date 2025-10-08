import styled, { css } from "styled-components";

const variations = {
  parimary: css`
    color: blue;
  `,
};
const sizes: string = {
  small: css`
    font-size: 1.5rem;
  `,
  medium: css`
    font-size: 2rem;
  `,
  large: css`
    font-size: 2.5rem;
  `,
};
const StyledButton = styled.button`
  outline: none;
  border: none;
  font-size: 2rem;
  background-color: transparent;
  ${(props) => sizes[props.size]}
`;

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
