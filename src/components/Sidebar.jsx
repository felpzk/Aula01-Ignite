import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sideber() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

            <div className={styles.profile}>
                <Avatar 
                   hasBorder={true}
                   img={'https://github.com/felpzk.png'}
                />
                <strong>Felipe Silva</strong>
                <span>Front-End</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}