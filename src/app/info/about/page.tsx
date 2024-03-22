import rootStyles from "@/app/main.module.css";
import Image from "next/image";

export default function About() {
  return (
    <main className={rootStyles.main}>
      <p>this is all just for fun</p>
      <p>I&apos;m not actually making a baby dating app</p>
      <small style={{marginTop: 'auto'}}>yet</small>
    </main>
  );
}
