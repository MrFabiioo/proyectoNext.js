import React from "react";
import styles from '@styles/MobileMenu.module.scss';
import Link from "next/link";
const MobileMenu = () => {
    return (
        <div class={styles.MobileMenu}>
            <ul>
                <li>
                    <Link href="/">CATECORIES</Link>
                </li>
                <li>
                    <Link href="/">All</Link>
                </li>
                <li>
                    <Link href="/">Clothes</Link>
                </li>
                <li>
                    <Link href="/">Electronics</Link>
                </li>
                <li>
                    <Link href="/">Furnitures</Link>
                </li>
                <li>
                    <Link href="/">Toys</Link>
                </li>
                <li>
                    <Link href="/">Others</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/">My orders</Link>
                </li>
                <li>
                    <Link href="/">My account</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/" class="email">camila@hotmail.com</Link>
                </li>
                <li>
                    <Link href="/" class="sing-out">Sing out</Link>
                </li>
            </ul>

        </div>
    );
};

export default MobileMenu;