import styled, { css } from "styled-components";
import React from "react";

const variations = {
  parimary: css`
    color: blue;
  `,
};

const sizes = {
  small: css`
    font-size: 1.5rem;
  `,
  medium: css`
    font-size: 2rem;
  `,
  large: css`
    font-size: 10rem;
  `,
};

type StyledButtonProps = {
  size?: "small" | "medium" | "large";
  variant?: "primary";
};
const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  border: none;
  font-size: 2rem;
  background-color: transparent;
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variant]}
`;

type ButtonProps = React.PropsWithChildren<StyledButtonProps>;
export default function Button({
  children,
  size = "medium",
  variant = "primary",
}: ButtonProps) {
  return (
    <StyledButton size={size} variant={variant}>
      {children}
    </StyledButton>
  );
}
