import styles from './header.module.scss'
import LinkList from "../../components/linklist";


const Header = () => {

    return (
        <header className={styles['header']}>
            <LinkList />
            <h2>
                Without even tryin', how do you do it?
            </h2>
        </header>
    );
};

export default Header;
