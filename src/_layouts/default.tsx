import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";

interface DefaultLayoutProps {
  title;
  description;
}

export default function DefaultLayout({
  title,
  description,
  children,
}: React.PropsWithChildren<DefaultLayoutProps>) {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
