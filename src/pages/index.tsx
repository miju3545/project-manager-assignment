import React from "react";
import Layout from "../components/layout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import Lists from "../components/lists";

export default function Home() {
  const lists = useSelector((state: RootState) => state.lists);

  return (
    <Layout>
      <Lists lists={lists} />
    </Layout>
  );
}
