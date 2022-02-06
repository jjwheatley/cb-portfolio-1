import { FC } from "react";
import Head from "next/head";
import { Footer, Header } from "../../components";
import scss from "./index.module.scss";
import { BaseLayoutProps } from "./types";

const BaseLayout: FC<BaseLayoutProps> = ({ children, head }) => (
  <>
    <Head>
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header className={scss.header} />
    <main className={scss.main}>{children}</main>
    <Footer className={scss.footer} />
  </>
);

export default BaseLayout;
