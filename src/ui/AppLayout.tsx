import styled from "styled-components";
import NavLinks from "./NavLinks";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const StyledAppLayout = styled.div`
  background-color: var(--wa-input-bg-light);
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.15fr 1fr;
  height: 100vh;
`;
export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Layout>
        <NavLinks />
        <Outlet />
      </Layout>
    </StyledAppLayout>
  );
}
