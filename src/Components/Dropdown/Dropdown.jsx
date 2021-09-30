import styles from "./Dorpdown.module.css";
import { useState } from "react";
import { list } from "../../data/data";
export default function DropDown({ btnText }) {
    const [open, setOpen] = useState(false);
    if (btnText) {
        return (
            <>
                <div className={styles.wrapper}>
                    <button onClick={() => setOpen(!open)} className={styles.dropdown}>
                        {btnText}
                    </button>
                    {open && (
                        <ul className={styles.dropdownList}>
                            {list.map((item, id) => (
                                <li className={styles.dropDownField}>
                                    <a href="./" key={id} className={styles.dropDownLink}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </>
        );
    }
    return <></>;
}
