import React from "react";
import styled from "@emotion/styled";
export default function Message({
  message,
  accept,
  refuse,
}: {
  message: string;
  accept: {
    text: string;
    action: () => void;
  };
  refuse: {
    text: string;
    action: () => void;
  };
}) {
  return (
    <Container>
      <Content>{message}</Content>
      <Actions>
        <div onClick={refuse.action}>{refuse.text}</div>
        <div onClick={accept.action}>{accept.text}</div>
      </Actions>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  padding: 0 10px;
  border-radius: 6px;
`;
const Content = styled.div`
  padding: 40px;
  font-size: 16px;
  border-bottom: 1px solid #dfdfdf;
`;

const Actions = styled.div`
  display: flex;

  > div {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
  }

  > div:nth-child(2) {
    border-left: 1px solid #dfdfdf;
  }
`;
