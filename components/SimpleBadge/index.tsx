import { FC } from "react";
import { BadgeProps } from "./types";
import css from "./styles.scss";

const SimpleBadge: FC<BadgeProps> = ({ content }) => (
  <div className={css.wrapper}>{content}</div>
);

export default SimpleBadge;