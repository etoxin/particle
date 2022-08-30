import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React from "react";
import { Stage } from "../components/Stage";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Stage />
    </div>
  );
};

export default Home;
