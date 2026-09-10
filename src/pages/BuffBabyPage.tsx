import rootStyles from "@/styles/main.module.css";

export default function BuffBabyPage() {
  return (
    <main className={rootStyles.main}>
      <img
        className={rootStyles.logo}
        src="/buffbaby_logo.svg"
        alt="buffbaby logo, baby"
        width={400}
        height={400}
      />
    </main>
  );
}
