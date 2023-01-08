import React, { CSSProperties, SyntheticEvent } from "react";
import styled from "@emotion/styled";

export default function Modal({
  show,
  onClose,
  style,
  children,
}: {
  show: boolean;
  onClose: () => void;
  style?: CSSProperties;
  children: React.ReactNode;
}) {
  if (!show) return null;

  return (
    <Container onClick={onClose}>
      <div onClick={(e: SyntheticEvent) => e.stopPropagation()} style={style}>
        {children}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3000;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
