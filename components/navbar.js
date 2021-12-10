import Link from 'next/link'
import styles from './navbar.module.css';

const NavBar = () => {
    return (
        <>
        <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/articles">
                        <a>Articles</a>
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/courses">
                        <a>Courses</a>
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/contact-us">
                        <a>Contact Us</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavBar;