import styles from "./ClickButtons.module.css";
import cx from "classnames";
import { useState } from "react";

export default function ClickButtons({ btnText, btnSide }) {
  const [open, setOpen] = useState(false);
  if (btnText) {
    return (
      <div className={styles.wrapper}>
        <button
          onClick={() => setOpen(!open)}
          className={styles.clickbuttonsBtn}
        >
          {btnText}
        </button>
        {open && (
          <div className={cx(styles.clickbuttonsBlock, styles[btnSide])}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        )}
      </div>
    );
  }
  return <></>;
}
