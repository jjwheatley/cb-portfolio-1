import { HeaderProps } from "./types";
import { FC } from "react";
import scss from "./index.module.scss";

const Header: FC<HeaderProps> = ({ className }) => (
  //ToDo: Replace placeholder components
  <header className={`${scss.header} ${className && className}`}>
    Placeholder Header
  </header>
);

export default Header;
