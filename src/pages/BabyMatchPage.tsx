import rootStyles from "@/styles/main.module.css";

export default function BabyMatchPage() {
  return (
    <main className={rootStyles.main}>
      <img
        className={rootStyles.logo}
        src="/babymatch_text.svg"
        alt="think like, tinder, but... for babies?"
        width={400}
        height={400}
      />
      <img
        className={rootStyles.logo}
        src="/babymatch_logo.svg"
        alt="babymatch logo, baby"
        width={400}
        height={400}
      />
    </main>
  );
}
