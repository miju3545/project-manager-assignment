import React from "react";
import styled from "@emotion/styled";
import GNB from "./gnb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <GNB />
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(220, 141, 179);
  overflow: scroll;
`;

const Main = styled.main`
  padding: 10px;
`;
