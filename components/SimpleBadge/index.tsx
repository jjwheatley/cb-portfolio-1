import { FC } from "react";
import { BadgeProps } from "./types";
import scss from "./index.module.scss";

const SimpleBadge: FC<BadgeProps> = ({ content }) => (
  <div className={scss.wrapper}>{content}</div>
);

export default SimpleBadge;
