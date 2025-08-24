import type {ReactNode} from "react";
import styles from './container.module.scss'

interface ContainerProps {
    children?: ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className={styles['container']}>
            <div className={styles['inner']}>
                {children}
            </div>
        </div>
    );
};

export default Container;

