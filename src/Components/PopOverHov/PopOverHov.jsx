import styles from "./PopOverHov.module.css";
import cx from "classnames";
import { useState } from "react";

export default function PopOverHov({ btnText, btnSide }) {
  const [open, setOpen] = useState(false);
  if (btnText) {
    return (
      <div className={styles.wrapper}>
        <button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className={styles.popoverHovBtn}
        >
          {btnText}
        </button>
        {open && (
          <div className={cx(styles.popoverHovBlock, styles[btnSide])}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        )}
      </div>
    );
  }
  return <></>;
}
