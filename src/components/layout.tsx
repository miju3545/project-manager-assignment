import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={styles.container}>
      <nav>네비게이션 영역</nav>
      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "rgb(220, 141, 179)",
    // overflow: 'scroll',
  },
  main: {
    padding: 10,
  },
};
