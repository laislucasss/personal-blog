import Header from "@includes/header";
import Footer from "@includes/footer";
import { ReactElement, ReactNode } from "react";

export default function DefaultLayout({
  children,
}: {
  children?: ReactNode;
}): ReactElement {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
