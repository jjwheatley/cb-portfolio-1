import { FC } from "react";
import { BadgeProps } from "./types";
import * as css from "./styles.scss";

const SimpleBadge: FC<BadgeProps> = ({ content }) => (
  <div className={css.wrapper}>{content}</div>
);

export default SimpleBadge;
