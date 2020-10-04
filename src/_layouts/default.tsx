import Header from "@includes/header";
import Footer from "@includes/footer";
import { ReactElement, ReactNode } from "react";

export default function DefaultLayout({
  children,
}: {
  children?: ReactNode;
}): ReactElement {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
