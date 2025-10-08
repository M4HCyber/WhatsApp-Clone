import styled from "styled-components";
import MessagesArea from "../features/chats/MessagesArea";
import ChatArea from "../features/chats/ChatArea";
const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 0.3fr auto;
  border-radius: var(--border-radius-lg);
  border-top: 1px solid var(--wa-medium-gray);
  border-left: 1px solid var(--wa-medium-gray);
`;

export default function Home() {
  return (
    <StyledHome>
      <MessagesArea />
      <ChatArea />
    </StyledHome>
  );
}
