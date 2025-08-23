import styles from "../layout.module.scss";
import Header from "../header/Header.tsx";
import Container from "../container/Container.tsx";
import {Outlet} from "react-router";
import Navbar from "../navbar/Navbar.tsx";


const Layout = () => {

    return (
        <div className={styles['layout']}>
            <Header />
            <Container>
                <Navbar />
                <Outlet />
            </Container>
        </div>
    );
};

export default Layout;