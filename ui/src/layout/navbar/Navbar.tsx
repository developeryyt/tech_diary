import styles from './navbar.module.scss'
import LinkList from "../../components/linklist";

const Navbar = () => {


    return (
        <nav className={styles['navbar-wrap']}>
            <LinkList />
        </nav>
    );
};

export default Navbar;