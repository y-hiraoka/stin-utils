import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>stin utilities</h1>
        <div style={{ height: "80px" }} />
        <Link href="/clipboard-image-generator">Clipboard Image Generator</Link>
        <Link href="/theme-colors">Theme Colors</Link>
      </main>
    </div>
  );
}
