import Head from 'next/head';
import LandingSection from '../components/LandingSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Taoyuan tourism</title>
        <meta name="description" content="Taoyuan tourism info page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingSection />
      </main>
    </>
  );
}
