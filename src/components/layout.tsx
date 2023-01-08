import React from "react";
import styled from "@emotion/styled";
import GNB from "./gnb";

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  overflow: scroll;
`;

const Main = styled.main`
  padding: 10px;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <GNB />
      <Main>{children}</Main>
    </LayoutContainer>
  );
}
