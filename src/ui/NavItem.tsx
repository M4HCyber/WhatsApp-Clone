import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import useNav from "../hooks/useNav";

const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3rem;
  padding: 0.8rem 1.2rem;
  border-radius: var(--border-radius-sm);
  position: relative;
  &:hover {
    background-color: var(--wa-light-gray);
  }
`;

const ItemCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const NumMessages = styled.span`
  background-color: var(--wa-teal-green);
  color: white;
  padding: 2px;
  font-size: 0.9rem;
  border-radius: 50%;
`;

type NavItemProps = {
  label?: string;
  icon: React.ReactElement;
  to?: string;
  numMessages?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function NavItem({
  label,
  icon,
  to,
  numMessages,
  onClick,
}: NavItemProps) {
  const [isOpen] = useNav();
  return (
    <NavLink to={to} style={{ position: "relative" }} onClick={onClick}>
      <StyledNavItem>
        <ItemCenter>
          <Button>{icon}</Button>
          <span>{isOpen && label}</span>
        </ItemCenter>
        {numMessages && <NumMessages>{numMessages}</NumMessages>}
      </StyledNavItem>
    </NavLink>
  );
}
