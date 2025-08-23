import styles from './header.module.scss'
import LinkList from "../../components/linklist";



const Header = () => {


    return (
        <header className={styles['header']}>
            <LinkList />
        </header>
    );
};

export default Header;
