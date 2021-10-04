import styles from "./HoverButtons.module.css";
import cx from "classnames";
import { useState } from "react";

export default function HoverButtons({ btnText, btnSide }) {
  const [open, setOpen] = useState(false);
  if (btnText) {
    return (
      <div className={styles.wrapper}>
        <button
          onMouseEnter={() => setOpen(!open)}
          onMouseLeave={() => setOpen(!open)}
          className={styles.hoverbuttonsBtn}
        >
          {btnText}
        </button>
        {open && (
          <div className={cx(styles.hoverbuttonsBlock, styles[btnSide])}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        )}
      </div>
    );
  }
  return <></>;
}
