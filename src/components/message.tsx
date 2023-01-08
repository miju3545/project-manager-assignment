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
        <div className="refuse" onClick={refuse.action}>
          {refuse.text}
        </div>
        <div className="accept" onClick={accept.action}>
          {accept.text}
        </div>
      </Actions>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 15px;
`;
const Content = styled.div`
  padding: 40px;
  border-bottom: 1px solid #dfdfdf;
`;

const Actions = styled.div`
  display: flex;

  > div {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    font-weight: 600;
  }

  > div:nth-child(2) {
    border-left: 1px solid #dfdfdf;
  }

  > .refuse {
    color: #ef7664;
  }

  > .accept {
    color: #5ba4ce;
  }
`;
