import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

import Hero from "components/hero";

export default function Home() {
    return <Hero 
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
    />
}
