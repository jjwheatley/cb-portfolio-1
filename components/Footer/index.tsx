import scss from "./index.module.scss";
import Image from "next/image";
import { FC } from "react";
import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={`${scss.footer} ${className && className}`}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <span className={scss.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
);

export default Footer;
