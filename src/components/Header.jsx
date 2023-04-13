import styles from './Header.module.css'

import igniteLogo from '../assets/Ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src="/src/assets/Ignite-logo.svg" alt="Logo do ignite" />
        </header>
    );
}