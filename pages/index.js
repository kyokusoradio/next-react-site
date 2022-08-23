import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

import Hero from "components/hero";
import Layout from "components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
