import styles from "./Acordion.module.css";
import { acordionList } from "../../data/data";
import { useState } from "react";
import cs from "classnames";
export default function Acordion() {
    const [count, setCount] = useState(null);
    const [open, setOpen] = useState(false);
    const counter = (idx) => {
        setOpen(!open);
        setCount(idx);
    };
    return (
        <div className={styles["acordion-wraper"]}>
            {acordionList.map((item, idx) => (
                <div key={idx}>
                    <button onClick={() => counter(idx)} className={styles.title}>
                        {item.title} {open && count === idx ? <span>&#9650;</span> : <span>&#9660;</span>}
                    </button>
                    {open && count === idx && (
                        <div className={idx === count ? cs(styles.description, styles.active) : cs(styles.description)}>
                            {item.description}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
