import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Main";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale)) } };
}

export default function Home() {
  const { t } = useTranslation(0);

  return (
    <div>
      <Head>
        <title>SuperCoolNinja | Portfolio</title>
        <meta name="description" content="Portfolio using next-js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar t={t} />
      <Main t={t} />
      <About t={t} />
      <Skills t={t} />
      <Project t={t} />
    </div>
  );
}
