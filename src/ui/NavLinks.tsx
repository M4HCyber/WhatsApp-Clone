import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Button from "./Button";
import NavItem from "./NavItem";
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
import useNav from "../hooks/useNav";
const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  padding: 1.5rem 0.2rem 0rem;
  /* width: fit-content; */
`;
const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HorizontalRow = styled.div`
  height: 1px;
  background-color: var(--wa-medium-gray);
`;

export default function NavLinks() {
  const [setIsOpen] = useNav();
  return (
    <StyledNavLinks>
      <NavGroup>
        <Button>
          <HiBars3 />
        </Button>
        {/* <NavItem
          icon={<HiBars3 />}
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        /> */}
        <NavItem
          label="Chat"
          icon={<HiOutlineChatBubbleOvalLeftEllipsis />}
          to="chatpage"
          numMessages={129}
        />
        <NavItem label="Calls" icon={<HiOutlinePhone />} to="" />
        <NavItem label="Status" icon={<HiOutlinePlusCircle />} to="status" />

        <HorizontalRow />
        <NavItem label="Meta AI" icon={<RiInfinityLine />} to="status" />
      </NavGroup>
      <NavGroup>
        <NavItem
          label="Starred messages"
          icon={<HiOutlineStar />}
          to="starredMessages"
        />
        <NavItem
          label="Achieved chats"
          icon={<HiOutlineArchive />}
          to="achivedchats"
        />
        <HorizontalRow />
        <NavItem label="Settings" icon={<HiOutlineCog6Tooth />} to="settings" />
        <NavItem label="Profile" icon={<HiOutlineUserCircle />} to="profile" />
      </NavGroup>
    </StyledNavLinks>
  );
}
