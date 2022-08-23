import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

import Header from "components/header";
import Hero from "components/hero";
import Footer from "components/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
      </main>

      <Footer />
    </>
  );
}
