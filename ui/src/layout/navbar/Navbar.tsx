import styles from './navbar.module.scss'
import LinkList from "../../components/linklist";
import Profile from "../../components/myprofile/Profile.tsx";

const Navbar = () => {


    return (
        <aside className={styles['navbar-wrap']}>
            <nav className={styles['navbar-box']}>
                <Profile />
                <h3>Category</h3>
                <LinkList/>
            </nav>
        </aside>
    );
};

export default Navbar;