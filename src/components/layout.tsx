import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={styles.container}>
      <nav>네비게이션 영역</nav>
      {children}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "rgb(220, 141, 179)",
  },
};
