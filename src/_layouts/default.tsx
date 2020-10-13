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
      <div className="flex-1 md:mx-auto md:w-3/5 lg:w-2/4">{children}</div>
      <Footer />
    </main>
  );
}
