import Head from 'next/head';
import LandingSection from '../components/LandingSection';
import MainInfoSection from '../components/MainInfoSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Taoyuan tourism</title>
        <meta name="description" content="Taoyuan tourism info page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="1"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <LandingSection />
        <MainInfoSection />
      </main>
    </>
  );
}
