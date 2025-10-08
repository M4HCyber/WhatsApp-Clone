import React from "react";
import styled from "styled-components";

const StyledMessagesArea = styled.div`
  background-color: var(--wa-chat-bg-light);
  border-top-left-radius: var(--border-radius-lg);
  border-right: 1px solid var(--wa-medium-gray);
`;

export default function MessagesArea() {
  return <StyledMessagesArea></StyledMessagesArea>;
}
