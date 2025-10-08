import { BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.2rem;
`;
const WhatsAppIcon = styled.span`
  color: var(--wa-teal-green);
  font-size: 2.2rem;
  display: flex;
`;

const Heading = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
`;
function Header() {
  return (
    <StyledHeader>
      <WhatsAppIcon>
        <BsWhatsapp />
      </WhatsAppIcon>
      <Heading>WhatsApp</Heading>
    </StyledHeader>
  );
}

export default Header;
