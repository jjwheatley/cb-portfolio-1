import { FC } from "react";
import Head from "next/head";

interface BaseLayoutProps {
  head: {
    title: string;
    description: string;
  };
}

const BaseLayout: FC<BaseLayoutProps> = ({ children, head }) => (
  <>
    <Head>
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>Header</header>
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

export default BaseLayout;
