import styles from "./PopOver.module.css";
import cx from 'classnames'
import { useState } from "react";

export default function PopOver({ btnText, btnSide }) {
    const [open, setOpen] = useState(false);
    if (btnText) {
        return (
            <div className={styles.wrapper}>
                <button onClick={()=> setOpen(!open)} className={styles.popoverBtn}>{btnText}</button>
                {open && <div className={cx(styles.popoverBlock, styles[btnSide])}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>}
            </div>
        );
    }
    return <></>;
}
