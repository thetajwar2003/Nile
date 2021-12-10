import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
      </main>

      <p></p>
    </div>
  );
}
