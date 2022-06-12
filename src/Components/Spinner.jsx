import styles from "./Spinner.module.css";
import { FaSpinner } from 'react-icons/fa';

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.spinning} size={60} />
        </div>
    )
}
