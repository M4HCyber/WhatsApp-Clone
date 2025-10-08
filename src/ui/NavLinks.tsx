import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";
import Button from "./Button";
import {
  HiBars3,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineCog6Tooth,
  HiOutlinePhone,
  HiOutlinePlusCircle,
  HiOutlineStar,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { RiInfinityLine } from "react-icons/ri";
import { HiOutlineArchive } from "react-icons/hi";
const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  padding: 3rem 1.2rem;
  width: fit-content;
`;
const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.3rem;
`;

const HorizontalRow = styled.div`
  height: 1px;
  background-color: var(--wa-medium-gray);
`;

export default function NavLinks() {
  return (
    <StyledNavLinks>
      <NavGroup>
        <div>
          <Button>
            <HiBars3 />
          </Button>
        </div>
        <NavLink to="messages">
          <NavItem>
            <Button>
              <HiOutlineChatBubbleOvalLeftEllipsis />
            </Button>
            <span>Chats</span>
          </NavItem>
        </NavLink>
        <NavLink to="">
          <NavItem>
            <Button>
              <HiOutlinePhone />
            </Button>
            <span>Calls</span>
          </NavItem>
        </NavLink>
        <NavLink to="">
          <NavItem>
            <Button>
              <HiOutlinePlusCircle />
            </Button>
            <span>Status</span>
          </NavItem>
        </NavLink>
        <HorizontalRow />
        <NavLink to="">
          <NavItem>
            <Button>
              <RiInfinityLine />
            </Button>
            <span>Meta AI</span>
          </NavItem>
        </NavLink>
      </NavGroup>
      <NavGroup>
        <NavLink to="">
          <NavItem>
            <Button>
              <HiOutlineStar />
            </Button>
            <span>Starred Messages</span>
          </NavItem>
        </NavLink>
        <NavLink to="">
          <NavItem>
            <Button>
              <HiOutlineArchive />
            </Button>
            <span>Achieved chats</span>
          </NavItem>
        </NavLink>
        <HorizontalRow />
        <NavLink to="">
          <NavItem>
            <Button>
              <HiOutlineCog6Tooth />
            </Button>
            <span>Settings</span>
          </NavItem>
        </NavLink>
        <NavLink to="">
          <NavItem>
            <Button>
              <HiOutlineUserCircle />
            </Button>
            <span>Profile</span>
          </NavItem>
        </NavLink>
      </NavGroup>
    </StyledNavLinks>
  );
}
